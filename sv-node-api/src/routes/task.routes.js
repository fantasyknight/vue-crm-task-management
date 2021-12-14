/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const companyMiddleware = require("../middleware/company");
const taskMiddleware = require("../middleware/task");

const taskController = require("../controllers/task.controller");

const router = express.Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:taskId", taskController.getTask);
router.put("/", taskController.updateTask);
router.delete("/", taskController.deleteTask);

router.post(
  "/:taskId/project/:projectId",
  taskController.connectTaskProject
);
router.post(
  "/:taskId/goal/:goalId",
  taskController.connectTaskGoal
);
router.post(
  "/:taskId/dream/:dreamId",
  taskController.connectTaskDream
);

router.get(
  "/:taskId/members",
  taskController.getTaskMembers
);
router.delete(
  "/:taskId/members",
  taskMiddleware.checkTaskAdmin,
  taskController.removeMembers
);
router.get(
  "/company/:companyId",
  companyMiddleware.checkCompanyMember,
  taskController.getTasks
);

router.post(
  "/:taskId/comments",
  taskController.createTaskComment
);
router.get(
  "/:taskId/comments",
  taskController.getTaskComments
);
router.get(
  "/:taskId/comments/:commentId",
  taskController.getTaskComment
);

router.post(
  "/:taskId/favorite",
  taskController.addFavorite
);
router.delete(
  "/:taskId/favorite",
  taskController.removeFavorite
);
router.get(
  "/:taskId/favorite",
  taskController.isFavorite
);

router.post(
  "/:taskId/invite",
  taskMiddleware.checkTaskAdmin,
  userMiddleware.checkUserIdValidation,
  taskController.inviteToTask
);
router.post(
  "/:taskId/invite/emails",
  taskMiddleware.checkTaskAdmin,
  taskController.inviteToTaskByEmails
);

module.exports = router;
