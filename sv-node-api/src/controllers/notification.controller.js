const notificaionServices = require("../services/notification.services");

const createNotification = async (req, res) => {
  try {
    const data = await notificaionServices.createNotification({
      userId: req.body.userId,
      title: req.body.title,
      link: req.body.link,
      type: req.body.type,
    });
    if (data == null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    res.status(201).json({
      data: data.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const setReadNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const data = await notificaionServices.setReadNotification(notificationId);

    res.status(200).json({
      message: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getNotification = async (req, res) => {
  const scopes = [];

  try {
    const { notificationId } = req.params;
    const data = await notificaionServices.getNotification(
      scopes,
      notificationId
    );

    if (data == null) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getNotifications = async (req, res) => {
  const scopes = [];

  try {
    const { userId } = req.params;
    const data = await notificaionServices.getNotifications(scopes, {
      where: {
        userId,
      },
    });

    if (!data.length) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteNotification = async (req, res) => {
  return res.status(200).json(req.body);
};

module.exports = {
  createNotification,
  setReadNotification,
  getNotification,
  getNotifications,
  deleteNotification,
};
