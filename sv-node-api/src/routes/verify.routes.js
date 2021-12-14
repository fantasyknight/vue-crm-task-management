const express = require("express");
const nodemailer = require("nodemailer");
const {winstonLevelLogger} = require("../services/logger.services");
const router = express.Router();
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});
var rand, mailOptions, host, link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

router.get('/send', function (req, res) {
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?id=" + rand;
    mailOptions = {
        to: req.query.to,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + 
        link + ">Click here to verify</a>"
    };
    winstonLevelLogger.info({Verify : "sending email to " + req.query.to});
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            winstonLevelLogger.error(error);
            res.end("error");
        } else {
            winstonLevelLogger.info("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

router.get('/verify', function (req, res) {
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        winstonLevelLogger.info("Domain is matched. Information is from Authentic email");
        if (req.query.id == rand) {
            winstonLevelLogger.info("Email is verified");
            res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
        }
        else {
            winstonLevelLogger.info("Email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else {
        res.end("<h1>Request is from unknown source");
    }
});

module.exports = router;