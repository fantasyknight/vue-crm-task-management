const express = require("express");
const userMiddleware = require("../middleware/user");
const fileController = require("../controllers/file.controller");

const router = express.Router();

router.post("/", userMiddleware.checkAuth, fileController.upload);
router.get(
  "/:fileId/info",
  userMiddleware.checkAuth,
  fileController.getFileInfo
);
router.get(
  "/:fileId/download",
  userMiddleware.checkAuth,
  fileController.downloadFile
);
router.delete("/:fileId", userMiddleware.checkAuth, fileController.deleteFile);

module.exports = router;
