/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const companyMiddleware = require("../middleware/company");
const projectMiddleware = require("../middleware/project");

const projectController = require("../controllers/project.controller");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, projectController.createProject);
router.get("/", authMiddleware.checkAuth, projectController.getAllProjects);
router.get(
  "/:projectId",
  authMiddleware.checkAuth,
  projectController.getProject
);
router.put("/", authMiddleware.checkAuth, projectController.updateProject);
router.delete("/", authMiddleware.checkAuth, projectController.deleteProject);

router.post(
  "/:projectId/goal/:goalId",
  authMiddleware.checkAuth,
  projectController.connectProjectGoal
);
router.post(
  "/:projectId/dream/:dreamId",
  authMiddleware.checkAuth,
  projectController.connectProjectDream
);

router.get(
  "/:projectId/members",
  authMiddleware.checkAuth,
  projectMiddleware.checkProjectMember,
  projectController.getProjectMembers
);
router.delete(
  "/:projectId/members",
  authMiddleware.checkAuth,
  projectMiddleware.checkProjectAdmin,
  projectController.removeMembers
);
router.get(
  "/company/:companyId",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyMember,
  projectController.getProjects
);

router.post(
  "/:projectId/comments",
  authMiddleware.checkAuth,
  projectController.createProjectComment
);
router.get(
  "/:projectId/comments",
  authMiddleware.checkAuth,
  projectController.getProjectComments
);
router.get(
  "/:projectId/comments/:commentId",
  authMiddleware.checkAuth,
  projectController.getProjectComment
);

router.post(
  "/:projectId/favorite",
  authMiddleware.checkAuth,
  projectController.addFavorite
);
router.delete(
  "/:projectId/favorite",
  authMiddleware.checkAuth,
  projectController.removeFavorite
);
router.get(
  "/:projectId/favorite",
  authMiddleware.checkAuth,
  projectController.isFavorite
);

router.post(
  "/:projectId/invite",
  authMiddleware.checkAuth,
  projectMiddleware.checkProjectAdmin,
  userMiddleware.checkUserIdValidation,
  projectController.inviteToProject
);
router.post(
  "/:projectId/invite/emails",
  authMiddleware.checkAuth,
  projectMiddleware.checkProjectAdmin,
  projectController.inviteToProjectByEmails
);

module.exports = router;
