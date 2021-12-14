const models = require("../models");
const { winstonLevelLogger } = require('./logger.services');

/**
 * Get User by Id
 * @param {array} scopes
 * @param {integer|string} userId
 * @return {Promise<models.User>}
 */
const getUserById = async (scopes = [], userId) => {
  return await models.User.scope(scopes).findByPk(userId);
};

/**
 * Get user
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<models.User>}
 */
const getUser = async (scopes = [], query = {}) => {
  return await models.User.scope(scopes).findOne(query);
};

/**
 * check is admin
 * @param {string} group // Dream, Goal, Project, Task, SubTask
 * @param {integer} userId
 * @param {integer} groupId
 * @return {Promise<boolean>}
 */
const isGroupAdmin = async (group, userId, groupId) => {
  try {
    const { Op } = require("sequelize");
    var mquery = {};
    var tModel = models.DreamMember;
    if (group == "Dream") {
      mquery = {
        where: { [Op.and]: [{ userId: userId }, { groupId: groupId }] },
      };
    } else if (group == "Goal") {
      tModel = models.GoalMember;
      mquery = {
        where: { [Op.and]: [{ userId: userId }, { groupId: groupId }] },
      };
    } else if (group == "Project") {
      tModel = models.ProjectMember;
      mquery = {
        where: { [Op.and]: [{ userId: userId }, { groupId: groupId }] },
      };
    } else if (group == "Task") {
      tModel = models.TaskMember;
      mquery = {
        where: { [Op.and]: [{ userId: userId }, { groupId: groupId }] },
      };
    } else if (group == "SubTask") {
      tModel = models.SubTaskMember;
      mquery = {
        where: { [Op.and]: [{ userId: userId }, { groupId: groupId }] },
      };
    }

    const data = await tModel.findOne(mquery);
    return data.dataValues.isAdmin;
  } catch (error) {
    return false;
  }
};

/**
 * Get users
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<Array<models.User>>}
 */
const getUsers = async (scopes = [], query = {}) => {
  return await models.User.scope(scopes).findAll(query);
};

/**
 * Create a user
 * @param {object} payload
 * @return {Promise<models.User>}
 */
const createUser = async (payload) => {
  
  winstonLevelLogger.info("User Service - Creating user");

  const user = await models.User.create(payload);
  await models.Profile.create({
    userId: user.dataValues.id,
    firstName: payload.firstName,
    lastName: payload.lastName,
    birthday: payload.birthday,
    location: payload.location,
    gender: payload.gender,
    phone: payload.phone,
    avatarUrl: payload.avatarUrl,
    fbUsername: payload.fbUsername,
    skypeUsername: payload.skypeUsername,
    slackUsername: payload.slackUsername,
  });
  const newUser = await getUser(
    [
      "withoutPassword",
      "withoutToken",
      "withProfile",
    ], {
      id: user.dataValues.id,
    });

  winstonLevelLogger.info("User Service - Created");

  return newUser;
};

const findOrCreateUser = async (payload) => {
  return await models.User.findOrCreate(payload);
};


module.exports = {
  getUser,
  getUserById,
  getUsers,
  createUser,
  findOrCreateUser,

  isGroupAdmin,
};
