const priorityServices = require("../services/priority.services");
const {winstonLevelLogger} = require("../services/logger.services");

const createPriority = async (req, res) => {
  try {
    const data = await priorityServices.createPriority({
      companyId: req.body.companyId,
      text: req.body.text,
      color: req.body.color,
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

const getPriority = async (req, res) => {
  const scopes = [];

  try {
    const { priorityId } = req.params;
    const data = await priorityServices.getPriority(
      scopes,
      priorityId
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

const updatePriority = async (req, res) => {
  try {
    const data = await priorityServices.updatePriority(req.body.id, req.body.data);
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



const getPrioritys = async (req, res) => {
  const scopes = [];

  try {
    const { companyId } = req.params;
    const data = await priorityServices.getPrioritys(scopes, {
      where: {
        companyId,
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

const deletePriority = async (req, res) => {
  try {
    const { priorityId } = req.params;
    const data = await priorityServices.deletePriority(priorityId);
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
  createPriority,
  getPriority,
  updatePriority,
  getPrioritys,
  deletePriority,
};
