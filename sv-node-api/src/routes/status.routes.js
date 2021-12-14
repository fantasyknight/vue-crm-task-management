/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const statusController = require("../controllers/status.controller");

const router = express.Router();

router.post(
    "/",
    authMiddleware.checkAuth,
    statusController.createStatus
);
router.get(
    "/:statusId",
    authMiddleware.checkAuth,
    statusController.getStatus
);
router.put(
    "/",
    authMiddleware.checkAuth,
    statusController.updateStatus
);
router.delete(
    "/:statusId",
    authMiddleware.checkAuth,
    statusController.deleteStatus
);

router.get(
    "/company/:companyId",
    authMiddleware.checkAuth,
    companyMiddleware.validateCompany,
    statusController.getStatuses
);
module.exports = router;
