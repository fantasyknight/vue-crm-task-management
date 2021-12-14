const models = require("../models");

const checkGroupMember = (req, res, next) => {
  try {
    const { groupId } = req.params;

    if (!req.user.isAdmin) {
      models.GroupMember.findOne({
        where: {
          groupId: groupId,
          userId: req.user.id,
        },
      }).then((groupMember) => {
        if (!groupMember || !groupMember.dataValues) {
          return res.status(403).json({
            message: "You are not the group member.",
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
  checkGroupMember,
};
