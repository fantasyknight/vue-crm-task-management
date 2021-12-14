const models = require("../models");

const getProject = async (scopes = [], projectId) => {
  return await models.Project.scope(scopes).findByPk(projectId);
};

const getProjects = async (scopes = [], query = {}, count = false) => {
  if (!count) return await models.Project.scope(scopes).findAll(query);
  return await models.Project.scope(scopes).findAndCountAll(query);
};

const getUserProjects = async(userId, page, limit) => {
  return await models.ProjectMember.scope('withProject').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};


const createProject = async (payload = {}) => {
  const project = await models.Project.create(payload);
  return await getProject([], project.dataValues.id);
};

const deleteProject = async (data = []) => {
  try {
    await models.Project.update(
      {
        isDeleted: true,
      },
      {
        where: {
          id: data,
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
};

const updateProject = async (id = 0, data = {}) => {
  const result = await models.Project.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  } 
  const returnUpdatedData =  await models.Project.findByPk(id);
  
  if(!returnUpdatedData) {
    res.message = 'Error while Fetching Data';
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

/**
 * Get ProjectComment
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<models.ProjectComment>}
 */
const getProjectComment = async (scopes = [], query = {}) => {
  return await models.ProjectComment.scope(scopes).findByPk(query);
};

/**
 * Get ProjectComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<array<models.projectcomment>>}
 */
const getProjectComments = async (scopes = [], query = {}) => {
  return await models.ProjectComment.scope(scopes).findAll(query);
};

/**
 *  Craete a new ProjectComment
 * @param {object} payload
 * @return {Promize<models.ProjectComment>}
 */
const createProjectComment = async (payload) => {
  // const scopes = [];
  const projectcomment = await models.ProjectComment.create(payload);

  return await projectcomment;
};

const connectProjectDream = async (payload = {}) => {
  try {
    await models.DreamProjects.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

const connectProjectGoal = async (payload = {}) => {
  try {
    await models.GoalProjects.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

const createProjectMembers = async (payload) => {
  return await models.ProjectMember.bulkCreate(payload);
};

const findOrCreateProjectMember = async (payload) => {
  return await models.ProjectMember.findOrCreate(payload);
};

const removeMember = async (users, projectId) => {
  try {
    for (const userId of users) {
      await models.ProjectMember.destroy({
        where: {
          userId: userId,
          projectId: projectId,
        },
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getProject,
  getProjects,
  getUserProjects,
  createProject,
  updateProject,
  deleteProject,

  getProjectComment,
  getProjectComments,
  createProjectComment,

  connectProjectGoal,
  connectProjectDream,

  createProjectMembers,
  findOrCreateProjectMember,
  removeMember,
};
