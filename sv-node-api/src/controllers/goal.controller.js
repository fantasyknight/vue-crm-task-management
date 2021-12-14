const utils = require("../utils");

const userServices = require("../services/user.services");
const goalServices = require("../services/goal.services");
const favoriteServices = require("../services/favorite.services");

const getGoal = async (req, res) => {
  try {
    const { goalId } = req.params;
    const data = await goalServices.getGoal(
      ["withTasks", "withProjects"],
      goalId
    );

    if (data == null) {
      return res.status(204).json({
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

const getGoalMembers = async (req, res) => {
  const scopes = ["withGoalMembers"];

  try {
    const { goalId } = req.params;
    const data = await goalServices.getGoal(scopes, goalId);

    if (data.dataValues.length == 0) {
      return res.status(204).json({
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

const getGoals = async (req, res) => {
  
  const scopes = ["withStatus"];

  try {
    const { companyId } = req.params;
    let data;
    let count = 0;
    if(req.query && req.query.page != null && req.query.limit != null ) {
      data = await goalServices.getGoals(scopes, {
        offset: (parseInt(req.query.page) - 1 ) * parseInt(req.query.limit),
        limit: parseInt(req.query.limit), 
        where: {companyId}
      }, true);

      count = data.count;
    } else {
      data = await goalServices.getGoals(scopes, {where: {companyId}});
      count = data.length;
    }
    
    if (!count) {
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

const getAllGoals = async(req, res) => {
  try {
    const data = await goalServices.getUserGoals(req.user.id, req.query.page, req.query.limit);

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

const createGoal = async (req, res) => {
  try {
    const data = await goalServices.createGoal({
      companyId: req.body.companyId,
      statusId: req.body.statusId,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      budget: req.body.budget,
      isDone: req.body.isDone,
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

const deleteGoal = async (req, res) => {
  try {
    const data = await goalServices.deleteGoal(req.body);
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

const updateGoal = async (req, res) => {
  try {
    const data = await goalServices.updateGoal(req.body.id, req.body.data);
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

const getGoalComment = async (req, res) => {
  const scopes = [];

  try {
    const { commentId } = req.params;
    const data = await goalServices.getGoalComment(scopes, commentId);
    if (data == null) {
      return res.status(204).json({
        mesage: "No data found!",
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

const getGoalComments = async (req, res) => {
  const scopes = [];

  try {
    const { goalId } = req.params;
    const data = await goalServices.getGoalComments(scopes, {
      where: {
        goalId,
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

const createGoalComment = async (req, res) => {
  try {
    const goalcomment = await goalServices.createGoalComment({
      userId: req.user.id,
      goalId: req.params.goalId,
      comment: req.body.comment,
    });
    if (goalcomment == null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    return res.status(201).json({
      data: goalcomment.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const connectGoalDream = async (req, res) => {
  try {
    const data = await goalServices.connectGoalDream({
      goalId: req.params.goalId,
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

const addFavorite = async (req, res) => {
  try {
    await favoriteServices.addGoalFavorite({
      userId: req.user.id,
      goalId: req.params.goalId,
    });
    return res.status(201).json({
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
    const data = await favoriteServices.removeGoalFavorite({
      userId: "" + req.user.id,
      goalId: req.params.goalId,
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

const inviteToGoal = async (req, res) => {
  try {
    const { goalId } = req.params;
    const result = [];

    for (const userId of req.body) {
      const data = goalServices.findOrCreateGoalMember({
        where: {
          goalId,
          userId,
        },
        default: {
          goalId,
          userId,
        },
      });

      result.push(data[0].dataValues);
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

const inviteToGoalByEmails = async (req, res) => {
  try {
    const { goalId } = req.params;
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
        goalId,
        userId: user[0].dataValues.id,
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
    const { goalId } = req.params;
    await goalServices.removeMember(req.body, goalId);

    return res.status().json({
      message: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};

const isFavorite = async (req, res) => {
  try {
    const data = await favoriteServices.isGoalFavorite({
      userId: "" + req.user.id,
      goalId: req.params.goalId,
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
  getGoal,
  getGoalMembers,
  getGoals,
  getAllGoals,
  createGoal,
  deleteGoal,
  updateGoal,

  getGoalComment,
  getGoalComments,
  createGoalComment,

  connectGoalDream,

  inviteToGoal,
  inviteToGoalByEmails,
  removeMembers,

  addFavorite,
  removeFavorite,
  isFavorite,
};
