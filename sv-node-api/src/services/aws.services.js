const AWS = require('aws-sdk');
const { winstonLevelLogger } = require("./logger.services");

const s3bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const SES_CONFIG = {
  apiVersion: "2010-12-01",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_SES_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = async (data) => {
  winstonLevelLogger.info(`AWS-Service: Sending Email to ${data.to}`);

  const params = {
    Source: process.env.AWS_SES_FROM_EMAIL,
    Destination: {
      ToAddresses: [data.to],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: data.html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Hello!`,
      },
    },
  };

  return AWS_SES.sendEmail(params).promise();
};

const uploadFile = async (params) => {
  winstonLevelLogger.info('AWS-Service: Uploading files');

  return await s3bucket.upload(params, function (err, data) {
    var value = {
      err: err,
      data: data
    };
    return value;
  });
};

const downloadFile = async (fileName, res) => {
  winstonLevelLogger.info('AWS-Service: Downloading file');

  var options = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName
  };

  res.attachment(fileName);
  await s3bucket.getObject(options).createReadStream().pipe(res);
};

module.exports = {
  sendEmail,
  uploadFile,
  downloadFile
};
