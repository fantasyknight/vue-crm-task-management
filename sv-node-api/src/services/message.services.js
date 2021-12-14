const models = require("../models");

const createMessage = async (payload) => {
  return await models.Message.create(payload);
};

const getMessage = async (scopes = [], messageId) => {
  return await models.Message.scope(scopes).findByPk(messageId);
};

const updateMessage = async (id = 0, data = {}) => {
  const result = await models.Message.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Message.findByPk(id);

  if (!returnUpdatedData) {
    res.message = 'Error while Fetching Data';
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const getMessages = async (scopes = [], query = {}, count = false) => {
  if (!count)
      return await models.Message.scope(scopes).findAll(query);
  return await models.Message.scope(scopes).findAndCountAll(query);
};

const getAllMessages = async () => {
  return await models.Message.findAll();
};

const deleteMessage = async (id = 0) => {
  try {
    await models.Message.update({ isDeleted: true, }, { where: { id: id, } });
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createMessage,
  getMessage,
  updateMessage,
  getMessages,
  getAllMessages,
  deleteMessage
};
