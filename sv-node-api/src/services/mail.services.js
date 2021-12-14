require ('dotenv').config();

const AWS = require('aws-sdk');

const SES_CONFIG = {
    accessKeyId: process.env.accessKey,
    secretAccessKey: process.env.secret,
    region: process.env.ses_region,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = async (recipientEmail, name) => {
    const params = {
      Source: 'no-reply@biztree.com',
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'This is the body of my email!',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Hello, ${name}!`,
        }
      },
    };
    return AWS_SES.sendEmail(params).promise();
};

const sendTemplateEmail = async (recipientEmail) => {
    const params = {
      Source: '<email address you verified>',
      Template: '<name of your template>',
      Destination: {
        ToAddresse: [ 
          recipientEmail
        ]
      },
      TemplateData: { name:'John Doe'}
    };
    return AWS_SES.sendTemplatedEmail(params).promise();
};

module.exports = {
  sendEmail,
  sendTemplateEmail,
};