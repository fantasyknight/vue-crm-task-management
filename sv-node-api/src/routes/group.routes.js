const express = require("express");

const groupController = require("../controllers/group.controller");

const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const groupMiddleware = require("../middleware/group");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, groupController.createGroup);
router.get("/", authMiddleware.checkAuth, groupController.getGroups);
router.get(
  "/:groupId",
  authMiddleware.checkAuth,
  groupMiddleware.checkGroupMember,
  groupController.getGroup
);
router.put("/", authMiddleware.checkAuth, groupController.updateGroup);
router.delete("/:groupId", authMiddleware.checkAuth, groupController.deleteGroup);

router.get(
  "/:groupId/members",
  authMiddleware.checkAuth,
  groupMiddleware.checkGroupMember,
  groupController.getGroupMembers
);
router.delete(
  "/:groupId/members",
  authMiddleware.checkAuth,
  groupController.removeMembers
);

router.post(
  "/:groupId/invite",
  authMiddleware.checkAuth,
  userMiddleware.checkUserIdValidation,
  groupController.inviteToUser
);
router.post(
  "/:groupId/invite/emails",
  authMiddleware.checkAuth,
  groupController.inviteToUserByEmails
);

module.exports = router;
