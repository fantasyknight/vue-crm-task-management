/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const companyMiddleware = require("../middleware/company");
const dreamMiddleware = require("../middleware/dream");

const dreamController = require("../controllers/dream.controller");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, dreamController.createDream);
router.get("/", authMiddleware.checkAuth, dreamController.getAllDreams);
router.get("/:dreamId", authMiddleware.checkAuth, dreamController.getDream);
router.put("/", authMiddleware.checkAuth, dreamController.updateDream);
router.delete("/", authMiddleware.checkAuth, dreamController.deleteDream);

router.get('/:dreamId/members', authMiddleware.checkAuth, dreamMiddleware.checkDreamMember, dreamController.getDreamMembers);
router.delete('/:dreamId/members', authMiddleware.checkAuth, dreamMiddleware.checkDreamAdmin, dreamController.removeMembers);
router.get('/company/:companyId', authMiddleware.checkAuth, companyMiddleware.checkCompanyMember, dreamController.getDreams);
router.post(
  "/:dreamId/comments",
  authMiddleware.checkAuth,
  dreamController.createDreamComment
);
router.get(
  "/:dreamId/comments",
  authMiddleware.checkAuth,
  dreamController.getDreamComments
);
router.get(
  "/:dreamId/comments/:commentId",
  authMiddleware.checkAuth,
  dreamController.getDreamComment
);

router.post(
  "/:dreamId/favorite",
  authMiddleware.checkAuth,
  dreamController.addFavorite
);
router.delete(
  "/:dreamId/favorite",
  authMiddleware.checkAuth,
  dreamController.removeFavorite
);
router.get(
  "/:dreamId/favorite",
  authMiddleware.checkAuth,
  dreamController.isFavorite
);

router.post(
  "/:dreamId/invite",
  authMiddleware.checkAuth,
  dreamMiddleware.checkDreamAdmin,
  userMiddleware.checkUserIdValidation,
  dreamController.inviteToDream
);
router.post(
  "/:dreamId/invite/emails",
  authMiddleware.checkAuth,
  dreamMiddleware.checkDreamAdmin,
  dreamController.inviteToDreamByEmails
);

module.exports = router;
