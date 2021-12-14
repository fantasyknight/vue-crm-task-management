const models = require("../models");
const userServices = require("../services/user.services");

const checkSubTaskAdmin = async (req, res, next) => {
  next();
  try {
    const { subtaskId } = req.params;

    if (!req.user.isAdmin) {
      const subtaskAdmin = await userServices.isGroupAdmin(
        "SubTask",
        req.user.id,
        subtaskId
      );
      if (!subtaskAdmin) {
        return res.status(403).json({
          message: "You are not subtask admin.",
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

const checkSubTaskMember = (req, res, next) => {
  try {
    const { subtaskId } = req.params;

    if (!req.user.isAdmin) {
      models.SubTaskMember.findOne({
        where: {
          subtaskId: subtaskId,
          userId: req.user.id,
        },
      }).then((subtaskMember) => {
        if (!subtaskMember || !subtaskMember.dataValues) {
          return res.status(403).json({
            message: "You are not the subtask member.",
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
  checkSubTaskAdmin,
  checkSubTaskMember,
};
