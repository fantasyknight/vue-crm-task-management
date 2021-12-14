/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const companyMiddleware = require("../middleware/company");
const goalMiddleware = require("../middleware/goal");

const goalController = require("../controllers/goal.controller");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, goalController.createGoal);
router.get("/", authMiddleware.checkAuth, goalController.getAllGoals);
router.get("/:goalId", authMiddleware.checkAuth, goalController.getGoal);
router.put("/", authMiddleware.checkAuth, goalController.updateGoal);
router.delete("/", authMiddleware.checkAuth, goalController.deleteGoal);

router.get(
  "/company/:companyId",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyMember,
  goalController.getGoals
);
router.post(
  "/:goalId/dream/:dreamId",
  authMiddleware.checkAuth,
  goalController.connectGoalDream
);

router.get(
  "/:goalId/members",
  authMiddleware.checkAuth,
  goalMiddleware.checkGoalMember,
  goalController.getGoalMembers
);
router.delete(
  "/:goalId/members",
  authMiddleware.checkAuth,
  goalMiddleware.checkGoalAdmin,
  goalController.removeMembers
);

router.post(
  "/:goalId/comments",
  authMiddleware.checkAuth,
  goalController.createGoalComment
);
router.get(
  "/:goalId/comments",
  authMiddleware.checkAuth,
  goalController.getGoalComments
);
router.get(
  "/:goalId/comments/:commentId",
  authMiddleware.checkAuth,
  goalController.getGoalComment
);

router.post(
  "/:goalId/favorite",
  authMiddleware.checkAuth,
  goalController.addFavorite
);
router.delete(
  "/:goalId/favorite",
  authMiddleware.checkAuth,
  goalController.removeFavorite
);
router.get(
  "/:goalId/favorite",
  authMiddleware.checkAuth,
  goalController.isFavorite
);

router.post(
  "/:goalId/invite",
  authMiddleware.checkAuth,
  goalMiddleware.checkGoalAdmin,
  userMiddleware.checkUserIdValidation,
  goalController.inviteToGoal
);
router.post(
  "/:goalId/invite/emails",
  authMiddleware.checkAuth,
  goalMiddleware.checkGoalAdmin,
  goalController.inviteToGoalByEmails
);

module.exports = router;
