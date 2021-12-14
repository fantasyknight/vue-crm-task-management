const models = require("../models");

const createPriority = async (payload) => {
  return await models.Priority.create(payload);
};

const getPriority = async (scopes = [], priorityId) => {
  return await models.Priority.scope(scopes).findByPk(priorityId);
};

const updatePriority = async (id = 0, data = {}) => {
  const result = await models.Priority.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Priority.findByPk(id);

  if (!returnUpdatedData) {
    res.message = 'Error while Fetching Data';
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const getPrioritys = async (scopes = [], query = {}) => {
  return await models.Priority.scope(scopes).findAll(query);
};

const deletePriority = async (id = 0) => {
  try {
    await models.Priority.update({ isDeleted: true, }, { where: { id: id, } });
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createPriority,
  getPriority,
  updatePriority,
  getPrioritys,
  deletePriority
};
