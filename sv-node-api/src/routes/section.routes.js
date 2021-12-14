/* eslint-disable max-len */
const express = require("express");
const authMiddleware = require("../middleware/auth");

const sectionController = require("../controllers/section.controller");

const router = express.Router();

router.post("/", sectionController.createSection);
router.get("/", sectionController.getAllSections);
router.get("/:sectionId", sectionController.getSection);
router.put("/", sectionController.updateSection);
router.delete("/", sectionController.deleteSection);


module.exports = router;
