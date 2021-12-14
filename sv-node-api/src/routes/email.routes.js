/* eslint-disable max-len */
const express = require('express');
const authMiddleware = require('../middleware/auth');
const emailController = require('../controllers/email.controller');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/send', authMiddleware.checkAuth, emailController.sendEmail);

module.exports = router;
