const express = require("express");

const companyController = require("../controllers/company.controller");

const authMiddleware = require("../middleware/auth");
const userMiddleware = require("../middleware/user");
const companyMiddleware = require("../middleware/company");

const router = express.Router();

router.post("/", authMiddleware.checkAuth, companyController.createCompany);
router.post("/all", authMiddleware.checkAuth, companyController.createCompany);
router.get("/", authMiddleware.checkAuth, companyController.getCompanies);
router.get(
  "/:companyId",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyMember,
  companyController.getCompany
);
router.put("/", authMiddleware.checkAuth, companyController.updateCompany);
router.delete("/", authMiddleware.checkAuth, companyController.deleteCompany);

router.get(
  "/:companyId/members",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyMember,
  companyController.getCompanyMembers
);
router.delete(
  "/:companyId/members",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyAdmin,
  companyController.removeMembers
);
router.post(
  "/:companyId/status",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyMember,
  companyController.createCompanyStatus
);

router.post(
  "/:companyId/invite",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyAdmin,
  userMiddleware.checkUserIdValidation,
  companyController.inviteToCompany
);
router.post(
  "/:companyId/invite/emails",
  authMiddleware.checkAuth,
  companyMiddleware.checkCompanyAdmin,
  companyController.inviteToCompanyByEmails
);

module.exports = router;
