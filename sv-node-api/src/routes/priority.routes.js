/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const priorityController = require("../controllers/priority.controller");

const router = express.Router();

router.post(
    "/",
    authMiddleware.checkAuth,
    priorityController.createPriority
);
router.get(
    "/:priorityId",
    authMiddleware.checkAuth,
    priorityController.getPriority
);
router.put(
    "/",
    authMiddleware.checkAuth,
    priorityController.updatePriority
);
router.delete(
    "/:priorityId",
    authMiddleware.checkAuth,
    priorityController.deletePriority
);

router.get(
    "/company/:companyId",
    authMiddleware.checkAuth,
    companyMiddleware.validateCompany,
    priorityController.getPrioritys
);
module.exports = router;
