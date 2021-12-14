/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get(
  "/",
  authMiddleware.checkAuth,
  authMiddleware.checkAdmin,
  userController.getUsers
);

module.exports = router;
