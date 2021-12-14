const awsService = require('../services/aws.services');

const sendEmail = async (req, res) => {
    try {
        const data = await awsService.sendEmail(req.body);
        res.status(200).json({
            message: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const upload = async (req, res) => {
    const file = req.file;

    //Where you want to store your file

    var params = {
        Bucket: process.env.BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };

    const value = await awsService.uploadFile(params);
    if (value.err) {
        res.status(500).json({ error: true, Message: value.err });
    } else {
        res.send({ data: value.data });
    }
};

const download = async (req, res) => {
    var fileName = req.params.name;
    if (!fileName) {
        return res.status(400).end("missing file name");
    }
    await awsService.downloadFile(fileName, res);
};

module.exports = {
    sendEmail,
    upload,
    download,
};
