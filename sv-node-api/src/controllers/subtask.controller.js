const utils = require("../utils");

const userServices = require("../services/user.services");
const subtaskServices = require("../services/subtask.services");
const favoriteServices = require("../services/favorite.services");

const getSubTask = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const data = await subtaskServices.getSubTask([], subtaskId);

    return res.status(200).json({
      data: data.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSubTaskMembers = async (req, res) => {
  const scopes = ["withSubTaskMembers"];

  try {
    const { subtaskId } = req.params;
    const data = await subtaskServices.getSubTask(scopes, subtaskId);

    if (!data.length) {
      return res.status(404).json({
        message: "No data found!",
      });
    }

    return res.status(200).json({
      data: data.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSubTasks = async (req, res) => {
  try {
    const { taskId } = req.params;
    const data = await subtaskServices.getSubTasks([], {
      where: {
        taskId,
      },
    });
    if(!data.length) {
      return res.status(204).json({
        message: 'No data found!'
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const getAllSubTasks = async(req, res) => {
  try {
    const data = await subtaskServices.getUserSubTasks(req.user.id, req.query.page, req.query.limit);

    if(!data.count) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error)
  {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createSubTask = async (req, res) => {
  try {
    const data = await subtaskServices.createSubTask({
      taskId: req.body.taskId,
      statusId: req.body.statusId,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      budget: req.body.budget,
      isDone: req.body.isDone,
    });
    if(data === null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    return res.status(201).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteSubTask = async (req, res) => {
  try {
    const data = await subtaskServices.deleteSubTask(req.body);
    if(data) {
      return res.status(200).json({});
    }
    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateSubTask = async (req, res) => {
  try {
    const data = await subtaskServices.updateSubTask(req.body.id, req.body.data);
    if(data.success) {
      return res.status(200).json({
        data : data.data,
      });
    }
    return res.status(400).json({
      message : data.message,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSubTaskComment = async (req, res) => {
  const scopes = [];

  try {
    const { commentId } = req.params;
    const data = await subtaskServices.getSubTaskComment(scopes, commentId);

    if (data == null) {
      return res.status(404).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSubTaskComments = async (req, res) => {
  const scopes = [];

  try {
    const { subtaskId } = req.params;
    const data = await subtaskServices.getSubTaskComments(scopes, {
      where: {
        subtaskId,
      },
    });

    if (!data.length) {
      return res.status(404).json({
        message: "No data found!",
      });
    }

    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createSubTaskComment = async (req, res) => {
  try {
    const subtaskcomment = await subtaskServices.createSubTaskComment({
      userId: req.user.id,
      subtaskId: req.params.subtaskId,
      comment: req.body.comment,
    });

    if (subtaskcomment == null) {
      return res.status(400).json({
        message: "Cannot create data",
      });
    }

    return res.status(201).json({
      data: subtaskcomment.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addFavorite = async (req, res) => {
  try {
    await favoriteServices.addSubTaskFavorite({
      userId: req.user.id,
      subtaskId: req.params.subtaskId,
    });
    return res.status(200).json({
      message: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const data = await favoriteServices.removeSubTaskFavorite({
      userId: "" + req.user.id,
      subtaskId: req.params.subtaskId,
    });
    if(data) {
      return res.status(200).json({});
    }
    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteToSubTask = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const result = [];

    for (const userId of req.body) {
      const data = subtaskServices.findOrCreateSubTaskMember({
        where: {
          subtaskId,
          userId,
        },
        default: {
          subtaskId,
          userId,
        },
      });

      result.push(data[0]);
    }
    return res.status(201).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteToSubTaskByEmails = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const emails = req.body;
    const payload = [];

    for (const email of emails) {
      const user = userServices.findOrCreateUser({
        where: {
          email,
        },
        defaults: {
          email,
          token: utils.generateToken(),
        },
      });

      payload.push({
        subtaskId,
        userId: user[0],
      });
    }

    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const removeMembers = async (req, res) => {
  try {
    const { subtaskId } = req.params;
    const data = await subtaskServices.removeMember(req.body, subtaskId);
    if(data) {
      return res.status(200).json({});
    }
    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};

const isFavorite = async (req, res) => {
  try {
    const data = await favoriteServices.isSubTaskFavorite({
      userId: "" + req.user.id,
      subtaskId: req.params.subtaskId,
    });
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSubTask,
  getSubTaskMembers,
  getSubTasks,
  getAllSubTasks,
  createSubTask,
  deleteSubTask,
  updateSubTask,

  getSubTaskComment,
  getSubTaskComments,
  createSubTaskComment,

  inviteToSubTask,
  inviteToSubTaskByEmails,
  removeMembers,

  addFavorite,
  removeFavorite,
  isFavorite,
};
