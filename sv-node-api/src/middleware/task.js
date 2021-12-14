const models = require("../models");
const userServices = require("../services/user.services");

const checkTaskAdmin = async (req, res, next) => {
  next();
  try {
    const { taskId } = req.params;

    if (!req.user.isAdmin) {
      const taskAdmin = await userServices.isGroupAdmin(
        "Task",
        req.user.id,
        taskId
      );
      if (!taskAdmin) {
        return res.status(403).json({
          message: "You are not task admin.",
        });
      }
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const checkTaskMember = (req, res, next) => {
  try {
    const { taskId } = req.params;

    if (!req.user.isAdmin) {
      models.TaskMember.findOne({
        where: {
          taskId: taskId,
          userId: req.user.id,
        },
      }).then((taskMember) => {
        if (!taskMember || !taskMember.dataValues) {
          return res.status(403).json({
            message: "You are not the task member.",
          });
        }
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  checkTaskAdmin,
  checkTaskMember,
};
