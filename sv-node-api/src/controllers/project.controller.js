const utils = require("../utils");
const {winstonLevelLogger} = require("../services/logger.services");

const userServices = require("../services/user.services");
const projectServices = require("../services/project.services");
const favoriteServices = require("../services/favorite.services");

const getProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const data = await projectServices.getProject(["withTasks"], projectId);

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

const getProjectMembers = async (req, res) => {
  const scopes = ["withProjectMembers"];

  try {
    const { projectId } = req.params;
    const project = await projectServices.getProject(scopes, projectId);

    if (project.dataValues.length == 0) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: project.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  const scopes = ["withStatus"];

  try {
    const { companyId } = req.params;
    let data;
    let count = 0;
    if(req.query && req.query.page != null && req.query.limit != null ) {
      data = await projectServices.getProjects(scopes, {
        offset: (parseInt(req.query.page) - 1 ) * parseInt(req.query.limit),
        limit: parseInt(req.query.limit), 
        where: {companyId}
      }, true);

      count = data.rows.length;
    } else {
      data = await projectServices.getProjects(scopes, {where: {companyId}});
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
      scucess: false,
      message: error.message,
    });
  }
};


const getAllProjects = async(req, res) => {
  try {
    const data = await projectServices.getUserProjects(req.user.id, req.query.page, req.query.limit);

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

const createProject = async (req, res) => {
  try {
    const data = await projectServices.createProject({
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

const deleteProject = async (req, res) => {
  try {
    const data = await projectServices.deleteProject(req.body);
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

const updateProject = async (req, res) => {
  try {
    const data = await projectServices.updateProject(req.body.id, req.body.data);
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

const connectProjectDream = async (req, res) => {
  try {
    const data = await projectServices.connectProjectDream({
      projectId: req.params.projectId,
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

const getProjectComment = async (req, res) => {
  const scopes = [];

  try {
    const { commentId } = req.params;
    const data = await projectServices.getProjectComment(scopes, commentId);

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

const getProjectComments = async (req, res) => {
  const scopes = [];

  try {
    const { projectId } = req.params;
    const data = await projectServices.getProjectComments(scopes, {
      where: {
        projectId,
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

const createProjectComment = async (req, res) => {
  try {
    const projectcomment = await projectServices.createProjectComment({
      userId: req.user.id,
      projectId: req.params.projectId,
      comment: req.body.comment,
    });

    if (projectcomment == null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    return res.status(201).json({
      data: projectcomment,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const connectProjectGoal = async (req, res) => {
  try {
    const data = await projectServices.connectProjectGoal({
      projectId: req.params.projectId,
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

const addFavorite = async (req, res) => {
  try {
    await favoriteServices.addProjectFavorite({
      userId: req.user.id,
      projectId: req.params.projectId,
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
    const data = await favoriteServices.removeProjectFavorite({
      userId: "" + req.user.id,
      projectId: req.params.projectId,
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

const inviteToProject = async (req, res) => {
  winstonLevelLogger.info("Project Controller - Inviting user to Project");
  try {
    const { projectId } = req.params;
    const result = [];

    for (const userId of req.body) {
      const data = projectServices.findOrCreateProjectMember({
        where: {
          projectId,
          userId,
        },
        default: {
          projectId,
          userId,
        },
      });

      result.push(data[0]);
    }
    winstonLevelLogger.info(result);
    return res.status(201).json({ data: result });
  } catch (error) {
    winstonLevelLogger.error(error.message);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteToProjectByEmails = async (req, res) => {
  try {
    const { projectId } = req.params;
    const emails = req.body;
    const payload = [];

    for (const email of emails) {
      const t = utils.generateToken();
      const user = userServices.findOrCreateUser({
        where: {
          email,
        },
        defaults: {
          email,
          token: t,
        },
      });

      payload.push({
        projectId,
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
    const { projectId } = req.params;
    const data = await projectServices.removeMember(req.body, projectId);
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};

const isFavorite = async (req, res) => {
  try {
    const data = await favoriteServices.isProjectFavorite({
      userId: "" + req.user.id,
      projectId: req.params.projectId,
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
  getProject,
  getProjectMembers,
  getProjects,
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,

  getProjectComment,
  getProjectComments,
  createProjectComment,

  connectProjectGoal,
  connectProjectDream,

  inviteToProject,
  inviteToProjectByEmails,
  removeMembers,

  addFavorite,
  removeFavorite,
  isFavorite,
};
