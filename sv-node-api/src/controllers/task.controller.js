const utils = require("../utils");
const models = require("../models");

const userServices = require("../services/user.services");
const taskServices = require("../services/task.services");
const favoriteServices = require("../services/favorite.services");

const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const data = await taskServices.getTask(["withSubTask"], taskId);

    if (data == null) {
      return res.status(204).json({
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

const getTaskMembers = async (req, res) => {
  const scopes = ["withTaskMembers"];

  try {
    const { taskId } = req.params;
    const task = await taskServices.getTask(scopes, taskId);

    return res.status(200).json({
      success: true,
      data: task.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {

  const scopes = ["withStatus"];

  try {
    const { companyId } = req.params;
    let data;
    let count = 0;
    if (req.query && req.query.page != null && req.query.limit != null) {
      data = await taskServices.getTasks(scopes, {
        offset: (parseInt(req.query.page) - 1) * parseInt(req.query.limit),
        limit: parseInt(req.query.limit),
        where: { companyId }
      }, true);

      count = data.rows.length;
    } else {
      data = await taskServices.getTasks(scopes, { where: { companyId } });
      count = data.length;
    }

    if (!count) {
      return res.status(204).json({
        message: "No data found!",
      });
    } return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const getAllTasks = async (req, res) => {
  try {
    const data = await taskServices.getUserTasks(req.user.id, req.query.page, req.query.limit);

    if (!data.count) {
      return res.status(204).json({
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

const createTask = async (req, res) => {
  try {
    // const user = await userServices.findOrCreateUser({
    //   where: {
    //     email,
    //   },
    //   defaults: {
    //     email,
    //     token: await utils.generateToken(),
    //   },
    // });
    // payload.push({
    //   companyId,
    //   userId: user[0].dataValues.id,
    // });


    const statusId = await models.Status.findOne({
      where: {
        text: req.body.status
      },
      attributes: ['id']
    })

    const sectionId = await models.Section.findOne({
      where: {
        title: req.body.section
      },
      attributes: ['id']
    })

    const priorityId = await models.Priority.findOne({
      where: {
        text: "urgent"
      },
      attributes: ['id']
    })


    const data = await taskServices.createTask({
      companyId: "1",
      statusId: statusId ? statusId.id : 1,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priorityId: priorityId ? priorityId.id : 1,
      priority: req.body.priority,
      budget: req.body.budget,
      sectionId: sectionId ? sectionId.id : 1,
      isDone: req.body.isDone,
    });
    // if (data == null) {
    //   return res.status(400).json({
    //     message: "Cannot create data!",
    //   });
    // }
    return res.status(201).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const data = await taskServices.deleteTask(req.body);
    if (data > 0) {
      return res.status(200).json({});
    } else {
      return res.status(400).json({});
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const data = await taskServices.updateTask(req.body.id, req.body.data);
    if (data.success) {
      return res.status(200).json({
        data: data.data,
      });
    }
    return res.status(400).json({
      message: data.message,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getTaskComment = async (req, res) => {
  const scopes = [];

  try {
    const { commentId } = req.params;
    const data = await taskServices.getTaskComment(scopes, commentId);

    if (data == null) {
      return res.status(204).json({
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

const getTaskComments = async (req, res) => {
  const scopes = [];

  try {
    const { taskId } = req.params;
    const data = await taskServices.getTaskComments(scopes, {
      where: {
        taskId,
      },
    });

    if (!data.length) {
      return res.status(204).json({
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

const createTaskComment = async (req, res) => {
  try {
    const data = await taskServices.createTaskComment({
      userId: req.user.id,
      taskId: req.params.taskId,
      comment: req.body.comment,
    });

    if (data == null) {
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

const connectTaskDream = async (req, res) => {
  try {
    const data = await taskServices.connectTaskDream({
      taskId: req.params.taskId,
      dreamId: req.params.dreamId,
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const connectTaskGoal = async (req, res) => {
  try {
    const data = await taskServices.connectTaskGoal({
      taskId: req.params.taskId,
      goalId: req.params.goalId,
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const connectTaskProject = async (req, res) => {
  try {
    const data = await taskServices.connectTaskProject({
      taskId: req.params.taskId,
      projectId: req.params.projectId,
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addFavorite = async (req, res) => {
  try {
    await favoriteServices.addTaskFavorite({
      userId: req.user.id,
      taskId: req.params.taskId,
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
    const data = await favoriteServices.removeTaskFavorite({
      userId: "" + req.user.id,
      taskId: req.params.taskId,
    });
    if (data) {
      return res.status(200).json({});
    }
    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteToTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const result = [];

    for (const userId of req.body) {
      const data = taskServices.findOrCreateTaskMember({
        where: {
          taskId,
          userId,
        },
        default: {
          taskId,
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

const inviteToTaskByEmails = async (req, res) => {
  try {
    const { taskId } = req.params;
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
        taskId,
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
    const { taskId } = req.params;
    const data = await taskServices.removeMember(req.body, taskId);
    if (data) {
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
    const data = await favoriteServices.isTaskFavorite({
      userId: "" + req.user.id,
      taskId: req.params.taskId,
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
  getTask,
  getTaskMembers,
  getTasks,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,

  getTaskComment,
  getTaskComments,
  createTaskComment,

  connectTaskDream,
  connectTaskGoal,
  connectTaskProject,

  inviteToTask,
  inviteToTaskByEmails,
  removeMembers,

  addFavorite,
  removeFavorite,
  isFavorite,
};
