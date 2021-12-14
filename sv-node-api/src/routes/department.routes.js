/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const departmentController = require("../controllers/department.controller");

const router = express.Router();

router.post(
    "/",
    authMiddleware.checkAuth,
    companyMiddleware.checkCompanyAdmin,
    departmentController.createDepartment
);
router.get(
    "/:departmentId",
    authMiddleware.checkAuth,
    companyMiddleware.checkCompanyAdmin,
    departmentController.getDepartment
);
router.put(
    "/",
    authMiddleware.checkAuth,
    companyMiddleware.checkCompanyAdmin,
    departmentController.updateDepartment
);
router.delete(
    "/:departmentId",
    authMiddleware.checkAuth,
    companyMiddleware.checkCompanyAdmin,
    departmentController.deleteDepartment
);

router.get(
    "/",
    authMiddleware.checkAuth,
    departmentController.getAllDepartments
);

router.get(
    "/company/:companyId",
    authMiddleware.checkAuth,
    companyMiddleware.checkAdminOrAdminMember,
    companyMiddleware.validateCompany,
    departmentController.getDepartments
);
module.exports = router;
