var dayjs = require('dayjs');

const reminderServices = require("../services/reminder.services");

const getReminder = async (req, res) => {
  try {
    const data = await reminderServices.getReminder([], req.params.reminderId);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createReminder = async (req, res) => {
  try {
    const reminder = await reminderServices.createReminder({
      userId: req.body.userId,
      receiverId: req.body.receiverId,
      type: req.body.type,
      itemId: req.body.itemId,
      excuteDate: dayjs(req.body.excuteDate).toDate(),
      summary: req.body.summary,
    });

    return res.status(201).json({
      data: reminder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteReminder = async (req, res) => {
  try {
    const data = await reminderServices.deleteReminder(req.body);
    if (data) {
      return res.status(200).json({});
    }

    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getReminder,
  createReminder,
  deleteReminder,
};
