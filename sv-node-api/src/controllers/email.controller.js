const mailerService = require('../services/mail.services');


const sendEmail = async (req, res) => {
    try {
        await mailerService.sendEmail('iwagaki@outlook.com', 'biztree');
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
  sendEmail,
};
