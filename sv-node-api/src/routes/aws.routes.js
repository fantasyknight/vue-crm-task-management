/* eslint-disable max-len */
const express = require('express');

const awsController = require('../controllers/aws.controller');

const authMiddleware = require("../middleware/auth");
const awsMiddleware = require("../middleware/upload");

const router = express.Router();

router.post('/upload',
    authMiddleware.checkAuth,
    awsMiddleware.uploadFile,
    awsController.upload
);

router.get("/download/:name",
    authMiddleware.checkAuth,
    awsController.download
);

module.exports = router;
