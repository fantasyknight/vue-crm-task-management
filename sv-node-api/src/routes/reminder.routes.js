/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");

const reminderController = require("../controllers/reminder.controller");

const router = express.Router();

router.post('/', authMiddleware.checkAuth, reminderController.createReminder);
router.get('/:reminderId', authMiddleware.checkAuth, reminderController.getReminder);
router.delete('/:reminderId', authMiddleware.checkAuth, reminderController.deleteReminder);

module.exports = router;
