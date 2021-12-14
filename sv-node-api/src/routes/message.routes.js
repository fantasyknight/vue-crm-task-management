/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const messageController = require("../controllers/message.controller");

const router = express.Router();

router.post(
    "/",
    authMiddleware.checkAuth,
    messageController.createMessage
);
router.get(
    "/:messageId",
    authMiddleware.checkAuth,
    messageController.getMessage
);
router.put(
    "/",
    authMiddleware.checkAuth,
    messageController.updateMessage
);
router.delete(
    "/:messageId",
    authMiddleware.checkAuth,
    messageController.deleteMessage
);

router.get(
    "/group/:groupId",
    authMiddleware.checkAuth,
    messageController.getMessages
);

router.get(
    "/",
    authMiddleware.checkAuth,
    messageController.getAllMessages
);
module.exports = router;
