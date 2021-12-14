const models = require("../models");

const getReminder = async (scopes = [], reminderId) => {
  return await models.Reminder.scope(scopes).findByPk(reminderId);
};

const getReminders = async (scopes = [], query = {}) => {
  return await models.Reminder.scope(scopes).findAll(query);
};

const createReminder = async (payload) => {
  const reminder = await models.Reminder.create(payload);
  return await getReminder([], reminder.dataValues.id);
};

const updateReminder = async (id = 0, data = {}) => {
  const result = await models.Reminder.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }

  const returnUpdatedData = await models.Reminder.findByPk(id);
  if (!returnUpdatedData) {
    res.message = "Error while Fetching Data";
    return res;
  }

  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const deleteReminder = async (reminderId) => {
  try {
    await models.Reminder.update({
      isDeleted: true,
    }, {
      where: {
        id: reminderId,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getReminder,
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder,
};
