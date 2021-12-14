const express = require("express");
const healthCheckController = require("../controllers/healthCheck.controller");

const router = express.Router();

router.get("/", healthCheckController.healthCheck);
router.get("/DBConnection", healthCheckController.checkDBConnection);

module.exports = router;
