const multer = require("multer");
require("dotenv").config();

var storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = upload.single("file");

module.exports = {
    uploadFile
};
