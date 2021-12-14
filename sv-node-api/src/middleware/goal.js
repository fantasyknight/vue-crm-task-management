const models = require("../models");
const userServices = require("../services/user.services");

const checkGoalAdmin = async (req, res, next) => {
  next();
  try {
    const { goalId } = req.params;

    if (!req.user.isAdmin) {
      const goalAdmin = await userServices.isGroupAdmin(
        "Goal",
        req.user.id,
        goalId
      );
      if (!goalAdmin) {
        return res.status(403).json({
          message: "You are not goal admin.",
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

const checkGoalMember = (req, res, next) => {
  try {
    const { goalId } = req.params;

    if (!req.user.isAdmin) {
      models.GoalMember.findOne({
        where: {
          goalId: goalId,
          userId: req.user.id,
        },
      }).then((goalMember) => {
        if (!goalMember || !goalMember.dataValues) {
          return res.status(403).json({
            message: "You are not the goal member.",
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
  checkGoalAdmin,
  checkGoalMember,
};
