const statusServices = require("../services/status.services");

const createStatus = async (req, res) => {
  try {
    const data = await statusServices.createStatus({
      companyId: req.body.companyId,
      text: req.body.text,
      color: req.body.color,
      order: req.body.order,
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

const getStatus = async (req, res) => {
  const scopes = [];

  try {
    const { statusId } = req.params;
    const data = await statusServices.getStatus(
      scopes,
      statusId
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

const updateStatus = async (req, res) => {
  try {
    const data = await statusServices.updateStatus(req.body.id, req.body.data);
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

const getStatuses = async (req, res) => {
  const scopes = [];

  try {
    const { companyId } = req.params;
    const data = await statusServices.getStatuses(scopes, {
      where: {
        companyId: companyId,
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

const deleteStatus = async (req, res) => {
  try {
    const { statusId } = req.params;
    const data = await statusServices.deleteStatus(statusId);
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
  createStatus,
  getStatus,
  updateStatus,
  getStatuses,
  deleteStatus,
};
