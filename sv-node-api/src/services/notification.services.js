const models = require("../models");

const getNotification = async (scopes = [], notificationId) => {
  return await models.Notification.scope(scopes).findByPk(notificationId);
};

const getNotifications = async (scopes = [], query = {}) => {
  return await models.Notification.scope(scopes).findAll(query);
};

const createNotification = async (payload) => {
  return await models.Notification.create(payload);
};

const setReadNotification = async (notificationId) => {
  try {
    const item = await models.Notification.scope([]).findByPk(notificationId);
    item.isRead = 1;
    await item.save();
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createNotification,
  setReadNotification,
  getNotification,
  getNotifications,
};
