const models = require("../models");
const userServices = require("../services/user.services");

const checkProjectAdmin = async (req, res, next) => {
  next();
  try {
    const { projectId } = req.params;

    if (!req.user.isAdmin) {
      const projectAdmin = await userServices.isGroupAdmin(
        "Project",
        req.user.id,
        projectId
      );
      if (!projectAdmin) {
        return res.status(403).json({
          message: "You are not project admin.",
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

const checkProjectMember = (req, res, next) => {
  try {
    const { projectId } = req.params;

    if (!req.user.isAdmin) {
      models.ProjectMember.findOne({
        where: {
          projectId: projectId,
          userId: req.user.id,
        },
      }).then((projectMember) => {
        if (!projectMember || !projectMember.dataValues) {
          return res.status(403).json({
            message: "You are not the project member.",
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
  checkProjectAdmin,
  checkProjectMember,
};
