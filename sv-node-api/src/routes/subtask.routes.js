/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const subtaskMiddleware = require("../middleware/subtask");

const subtaskController = require("../controllers/subtask.controller");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, subtaskController.createSubTask);
router.get("/", authMiddleware.checkAuth, subtaskController.getAllSubTasks);
router.put("/", authMiddleware.checkAuth, subtaskController.updateSubTask);
router.delete("/", authMiddleware.checkAuth, subtaskController.deleteSubTask);

router.get(
  "/:subtaskId",
  authMiddleware.checkAuth,
  subtaskController.getSubTask
);

router.get(
  "/:subtaskId/members",
  authMiddleware.checkAuth,
  subtaskMiddleware.checkSubTaskMember,
  subtaskController.getSubTaskMembers
);
router.delete(
  "/:subtaskId/Members",
  authMiddleware.checkAuth,
  subtaskMiddleware.checkSubTaskAdmin,
  subtaskController.removeMembers
);
router.get(
  "/task/:taskId",
  authMiddleware.checkAuth,
  subtaskController.getSubTasks
);

router.post(
  "/:subtaskId/comments",
  authMiddleware.checkAuth,
  subtaskController.createSubTaskComment
);
router.get(
  "/:subtaskId/comments",
  authMiddleware.checkAuth,
  subtaskController.getSubTaskComments
);
router.get(
  "/:subtaskId/comments/:commentId",
  authMiddleware.checkAuth,
  subtaskController.getSubTaskComment
);

router.post(
  "/:subtaskId/favorite",
  authMiddleware.checkAuth,
  subtaskController.addFavorite
);
router.delete(
  "/:subtaskId/favorite",
  authMiddleware.checkAuth,
  subtaskController.removeFavorite
);
router.get(
  "/:subtaskId/favorite",
  authMiddleware.checkAuth,
  subtaskController.isFavorite
);

router.post(
  "/:subtaskId/invite",
  authMiddleware.checkAuth,
  subtaskMiddleware.checkSubTaskAdmin,
  userMiddleware.checkUserIdValidation,
  subtaskController.inviteToSubTask
);
router.post(
  "/:subtaskId/invite/emails",
  authMiddleware.checkAuth,
  subtaskMiddleware.checkSubTaskAdmin,
  subtaskController.inviteToSubTaskByEmails
);

module.exports = router;
