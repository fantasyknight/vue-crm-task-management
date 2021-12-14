const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get('/resendEmail', authController.resendEmail);
router.get('/verify', authController.emailVerify);

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/me", authMiddleware.checkAuth, authController.me);

module.exports = router;
