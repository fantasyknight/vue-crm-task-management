const models = require("../models");

const getGoal = async (scopes = [], goalId) => {
  return await models.Goal.scope(scopes).findByPk(goalId);
};

const getGoals = async (scopes = [], query = {}, count = false) => {
  if (!count) return await models.Goal.scope(scopes).findAll(query);
  return await models.Goal.scope(scopes).findAndCountAll(query);
};

const getUserGoals = async(userId, page, limit) => {
  return await models.GoalMember.scope('withGoal').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};


const createGoal = async (payload = {}) => {
  const goal = await models.Goal.create(payload);

  return await goal;
};

const deleteGoal = async (data = []) => {
  try {
    await models.Goal.update(
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

const updateGoal = async (id = 0, data = {}) => {
  const result = await models.Goal.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  } 
  const returnUpdatedData =  await models.Goal.findByPk(id);
  
  if(!returnUpdatedData) {
    res.message = 'Error while Fetching Data';
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const connectGoalDream = async (payload = {}) => {
  try {
    await models.DreamGoals.create(payload);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Get GoalComment
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<models.GoalComment>}
 */
const getGoalComment = async (scopes = [], query = {}) => {
  return await models.GoalComment.scope(scopes).findByPk(query);
};

/**
 * Get GoalComments
 * @param {array} scopes
 * @param {object} query
 * @return {Promize<array<models.goalcomment>>}
 */
const getGoalComments = async (scopes = [], query = {}) => {
  return await models.GoalComment.scope(scopes).findAll(query);
};

/**
 *  Craete a new GoalComment
 * @param {object} payload
 * @return {Promize<models.GoalComment>}
 */
const createGoalComment = async (payload) => {
  const scopes = [];
  const goalcomment = await models.GoalComment.create(payload);

  return await getGoalComment(scopes, goalcomment.dataValues.id);
};

const createGoalMembers = async (payload) => {
  return await models.GoalMember.bulkCreate(payload);
};

const findOrCreateGoalMember = async (payload) => {
  return await models.GoalMember.findOrCreate(payload);
};

const removeMember = async (users, goalId) => {
  try {
    for (const userId of users) {
      await models.GoalMember.destroy({
        where: {
          userId: userId,
          goalId: goalId,
        },
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getGoal,
  getGoals,
  getUserGoals,
  createGoal,
  updateGoal,
  deleteGoal,

  getGoalComment,
  getGoalComments,
  createGoalComment,

  connectGoalDream,

  createGoalMembers,
  findOrCreateGoalMember,
  removeMember
};
