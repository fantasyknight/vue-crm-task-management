// const userServices = require("../services/user.services");
// const utils = require("../utils");

const upload = async (req, res) => {
  //   const scopes = [];
  return res.status(200).json(req.body);
};

const getFileInfo = async (req, res) => {
  //   const scopes = [];
  return res.status(200).json(req.body);
};

const downloadFile = async (req, res) => {
  //   const scopes = [];
  return res.status(200).json(req.body);
};

module.exports = {
  upload,
  getFileInfo,
  downloadFile,
};
