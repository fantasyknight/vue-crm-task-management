const models = require("../models");

const createStatus = async (payload) => {
  return await models.Status.create(payload);
};

const getStatus = async (scopes = [], priorityId) => {
  return await models.Status.scope(scopes).findByPk(priorityId);
};

const updateStatus = async (id = 0, data = {}) => {
  const result = await models.Status.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Status.findByPk(id);

  if (!returnUpdatedData) {
    res.message = 'Error while Fetching Data';
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const getStatuses = async (scopes = [], query = {}) => {
  return await models.Status.scope(scopes).findAll(query);
};

const deleteStatus = async (id = 0) => {
  try {
    await models.Status.destroy({ where: { id: id } });
    await models.Dream.update(
      { statusId: 0 },
      { where: { statusId: id } }
    );
    await models.Goal.update(
      { statusId: 0 },
      { where: { statusId: id } }
    );
    await models.Project.update(
      { statusId: 0 },
      { where: { statusId: id } }
    );
    await models.Task.update(
      { statusId: 0 },
      { where: { statusId: id } }
    );

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createStatus,
  getStatus,
  updateStatus,
  getStatuses,
  deleteStatus
};
