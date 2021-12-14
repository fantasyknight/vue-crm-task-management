/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");

const notificationController = require("../controllers/notification.controller");

const router = express.Router();

router.post(
  "/",
  authMiddleware.checkAuth,
  notificationController.createNotification
);
router.get(
  "/:notificationId",
  authMiddleware.checkAuth,
  notificationController.getNotification
);
router.put(
  "/:notificationId/read",
  authMiddleware.checkAuth,
  notificationController.setReadNotification
);
router.delete(
  "/:notificationId",
  authMiddleware.checkAuth,
  notificationController.deleteNotification
);

router.get(
  "/user/:userId",
  authMiddleware.checkAuth,
  notificationController.getNotifications
);
module.exports = router;
