const models = require("../models");
const userServices = require("../services/user.services");

const checkDreamAdmin = async (req, res, next) => {
  next();
  try {
    const { dreamId } = req.params;

    if (!req.user.isAdmin) {
      const dreamAdmin = await userServices.isGroupAdmin(
        "Dream",
        req.user.id,
        dreamId
      );
      if (!dreamAdmin) {
        return res.status(403).json({
          message: "You are not dream admin.",
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

const checkDreamMember = (req, res, next) => {
  try {
    const { dreamId } = req.params;

    if (!req.user.isAdmin) {
      models.DreamMember.findOne({
        where: {
          dreamId: dreamId,
          userId: req.user.id,
        },
      }).then((dreamMember) => {
        if (!dreamMember || !dreamMember.dataValues) {
          return res.status(403).json({
            message: "You are not the dream member.",
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
  checkDreamAdmin,
  checkDreamMember,
};
