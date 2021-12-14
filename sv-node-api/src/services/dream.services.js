const models = require("../models");

/**
 * Get dream by Id
 * @param {array} scopes
 * @param {integer} dreamId
 * @return {Promise<models.Dream>}
 */
const getDream = async (scopes = [], dreamId) => {
  return await models.Dream.scope(scopes).findByPk(dreamId);
};

/**
 * Get Dreams
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<array<models.Dream>>}
 */
const getDreams = async (scopes = [], query = {}, count = false) => {
  if(!count)
    return await models.Dream.scope(scopes).findAll(query);
  return await models.Dream.scope(scopes).findAndCountAll(query);
};

const getUserDreams = async(userId, page, limit) => {
  return await models.DreamMember.scope('withDream').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};

/**
 * Create a new Dream
 * @param {object} payload
 * @return {Promize<models.Dream>}
 */
const createDream = async (payload) => {
  const dream = await models.Dream.create(payload);
  return dream;
};

const deleteDream = async (data = []) => {
  try {
    await models.Dream.update(
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

const updateDream = async (id = 0, data = {}) => {
  const result = await models.Dream.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Dream.findByPk(id);
  if (!returnUpdatedData) {
    res.message = "Error while Fetching Data";
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

/**
 * Get DreamComment
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<models.DreamComment>}
 */
const getDreamComment = async (scopes = [], query = {}) => {
  return await models.DreamComment.scope(scopes).findByPk(query);
};

/**
 * Get DreamComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<array<models.dreamcomment>>}
 */
const getDreamComments = async (scopes = [], query = {}) => {
  return await models.DreamComment.scope(scopes).findAll(query);
};

/**
 *  Craete a new DreamComment
 * @param {object} payload
 * @return {Promize<models.DreamComment>}
 */
const createDreamComment = async (payload) => {
  const scopes = [];
  const dreamcomment = await models.DreamComment.create(payload);

  return await getDreamComment(scopes, dreamcomment.dataValues.id);
};

const createDreamMembers = async (payload) => {
  return await models.DreamMember.bulkCreate(payload);
};

const findOrCreateDreamMember = async (payload) => {
  return await models.DreamMember.findOrCreate(payload);
};

const removeMember = async (users, dreamId) => {
  try {
    for (const userId of users) {
      await models.DreamMember.destroy({
        where: {
          userId: userId,
          dreamId: dreamId,
        },
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

const test = async (arg1, arg2) => {
  return arg1 + arg2;
};

module.exports = {
  getDream,
  getDreams,
  getUserDreams,
  createDream,
  updateDream,
  deleteDream,

  getDreamComment,
  getDreamComments,
  createDreamComment,

  createDreamMembers,
  findOrCreateDreamMember,
  removeMember,
  test,
};
