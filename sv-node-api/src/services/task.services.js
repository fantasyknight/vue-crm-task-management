const models = require("../models");

const getTask = async (scopes = [], taskId) => {
  return await models.Task.scope(scopes).findByPk(taskId);
};

const getTasks = async (scopes = [], query = {}, count = false) => {
  if (!count) return await models.Task.scope(scopes).scope('withStatus').findAll(query);
  return await models.Task.scope(scopes).findAndCountAll(query);
};

const getUserTasks = async (userId, page, limit) => {
  return await models.TaskMember.scope('withTask').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};


const createTask = async (payload = {}) => {
  const task = await models.Task.create(payload);
  return await getTask([], task.dataValues.id);
};

const deleteTask = async (data = []) => {
  try {
    await models.Task.update({ isDeleted: true }, { where: { id: data } });
    return true;
  } catch (error) {
    return false;
  }
};

const updateTask = async (id = 0, data = {}) => {
  const result = await models.Task.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Task.findByPk(id);
  if (!returnUpdatedData) {
    res.message = "Error while Fetching Data";
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const connectTaskProject = async (payload = {}) => {
  try {
    await models.ProjectTasks.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Get TaskComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<models.TaskComment>}
 */
const getTaskComment = async (scopes = [], query = {}) => {
  return await models.TaskComment.scope(scopes).findByPk(query);
};

/**
 * Get TaskComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<array<models.taskcomment>>}
 */
const getTaskComments = async (scopes = [], query = {}) => {
  return await models.TaskComment.scope(scopes).findAll(query);
};

/**
 *  Craete a new TaskComment
 * @param {object} payload
 * @return {Promize<models.TaskComment>}
 */
const createTaskComment = async (payload) => {
  // const scopes = [];
  const taskcomment = await models.TaskComment.create(payload);

  return await taskcomment;
};

const connectTaskGoal = async (payload = {}) => {
  try {
    await models.GoalTasks.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

const connectTaskDream = async (payload = {}) => {
  try {
    await models.DreamTasks.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

const createTaskMembers = async (payload) => {
  return await models.TaskMember.bulkCreate(payload);
};

const findOrCreateTaskMember = async (payload) => {
  return await models.TaskMember.findOrCreate(payload);
};

const removeMember = async (users, taskId) => {
  try {
    for (const userId of users) {
      await models.TaskMember.destroy({
        where: {
          userId: userId,
          taskId: taskId,
        },
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getTask,
  getTasks,
  getUserTasks,
  createTask,
  updateTask,
  deleteTask,

  getTaskComment,
  getTaskComments,
  createTaskComment,

  connectTaskDream,
  connectTaskGoal,
  connectTaskProject,

  createTaskMembers,
  findOrCreateTaskMember,
  removeMember
};
