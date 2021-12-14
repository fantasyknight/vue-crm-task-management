const messageServices = require("../services/message.services");

const createMessage = async (req, res) => {
  try {
    const data = await messageServices.createMessage({
      groupId: req.body.groupId,
      userId: req.body.userId,
      text: req.body.text,
      isDeleted: req.body.isDeleted,
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

const getMessage = async (req, res) => {
  const scopes = [];

  try {
    const { messageId } = req.params;
    const data = await messageServices.getMessage(
      scopes,
      messageId
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

const updateMessage = async (req, res) => {
  try {
    const data = await messageServices.updateMessage(req.body.id, req.body.data);
    if (data.success) {
      return res.status(200).json({
        data: data.data,
      });
    }
    return res.status(400).json({
      message: data.message,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  const scopes = ["withGroup"];
  try {
    const { groupId } = req.params;
    let data;
    let count = 0;
    if (req.query && req.query.page != null && req.query.limit != null) {
      data = await messageServices.getMessages(
        scopes,
        {
          offset: (parseInt(req.query.page) - 1) * parseInt(req.query.limit),
          limit: parseInt(req.query.limit),
          where: { groupId },
        },
        true
      );
      count = data.count;
    } else {
      data = await messageServices.getMessages(scopes, {where: {groupId}});
      count = data.length;
    }

    if (!count) {
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

const getAllMessages = async (req, res) => {

  try {
    const data = await messageServices.getAllMessages();

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

const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const data = await messageServices.deleteMessage(messageId);
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
  createMessage,
  getMessage,
  updateMessage,
  getAllMessages,
  getMessages,
  deleteMessage,
};
