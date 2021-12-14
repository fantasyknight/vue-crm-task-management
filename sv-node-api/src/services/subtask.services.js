const models = require("../models");

const getSubTask = async (scopes = [], subtaskId) => {
  return await models.SubTask.scope(scopes).findByPk(subtaskId);
};

const getSubTasks = async (scopes = [], query = {}) => {
  return await models.SubTask.scope(scopes).findAll(query);
};

const getUserSubTasks = async(userId, page, limit) => {
  return await models.SubTaskMember.scope('withSubTask').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};


const createSubTask = async (payload = {}) => {
  const subtask = await models.SubTask.create(payload);
  return await getSubTask([], subtask.dataValues.id);
};

const deleteSubTask = async (data = []) => {
  try {
    await models.SubTask.update(
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
    return true;
  }
};

const updateSubTask = async (id, data) => {
  const result = await models.SubTask.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.SubTask.findByPk(id);

  if (!returnUpdatedData) {
    res.message = "Error while Fetching Data";
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

/**
 * Get SubTaskComment
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<models.SubTaskComment>}
 */
const getSubTaskComment = async (scopes = [], query = {}) => {
  return await models.SubTaskComment.scope(scopes).findByPk(query);
};

/**
 * Get SubTaskComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<array<models.subtaskcomment>>}
 */
const getSubTaskComments = async (scopes = [], query = {}) => {
  return await models.SubTaskComment.scope(scopes).findAll(query);
};

/**
 *  Craete a new SubTaskComment
 * @param {object} payload
 * @return {Promize<models.SubTaskComment>}
 */
const createSubTaskComment = async (payload) => {
  const scopes = [];
  const subtaskcomment = await models.SubTaskComment.create(payload);

  return await getSubTaskComment(scopes, subtaskcomment.dataValues.id);
};

const createSubTaskMembers = async (payload) => {
  return await models.SubTaskMember.bulkCreate(payload);
};

const findOrCreateSubTaskMember = async (payload) => {
  return await models.SubTaskMember.findOrCreate(payload);
};

const removeMember = async (users, subtaskId) => {
  try {
    for (const userId of users) {
      await models.SubTaskMember.destroy({
        where: {
          userId: userId,
          subtaskId: subtaskId,
        },
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getSubTask,
  getSubTasks,
  getUserSubTasks,
  createSubTask,
  updateSubTask,
  deleteSubTask,

  getSubTaskComment,
  getSubTaskComments,
  createSubTaskComment,

  createSubTaskMembers,
  findOrCreateSubTaskMember,
  removeMember
};
