const userServices = require("../services/user.services");
const awsService = require("../services/aws.services");
const { winstonLevelLogger } = require('../services/logger.services');
const utils = require("../utils");
const models = require("../models");

const login = async (req, res) => {
  try {
    const user = await userServices.getUser([], {
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    if (user.dataValues.isDeleted) {
      return res.status(403).json({
        message: "User is banned",
      });
    }

    if (!user.dataValues.isVerified) {
      return res.status(403).json({
        message: "Email is not verified",
      });
    }

    const result = await utils.passwordCompare(
      req.body.password,
      user.dataValues.password
    );

    if (!result) {
      return res.status(401).json({
        message: "Invalid credentials TOKEN!",
      });
    }

    const token = await utils.generateJWT({
      data: {
        id: user.dataValues.id,
        email: user.dataValues.email,
        isVerified: user.dataValues.isVerified,
        isAdmin: user.dataValues.isAdmin,
        isDeleted: user.dataValues.isDeleted,
      },
    });

    if (!token) {
      return res.status(500).json({
        message: "Token generation failed",
      });
    }

    return res.status(200).json({
      message: "Authentication Success!",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const result = await userServices.getUser([], {
      where: {
        email: req.body.email,
      },
    });
    if (result) {
      return res.status(409).json({
        message: "Email already exists!",
      });
    }

    const token = await utils.generateToken();
    if (!token) {
      return res.status(500).json({
        message: "Token generation failed",
      });
    }

    const hash = await utils.hashPassword(req.body.password, token);
    if (!hash) {
      return res.status(500).json({
        message: "Hashing password failed",
      });
    }

    const data = await userServices.createUser({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      token,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      location: req.body.location,
      gender: req.body.gender,
      phone: req.body.phone,
      avatarUrl: req.body.avatarUrl,
      fbUsername: req.body.fbUsername,
      skypeUsername: req.body.skypeUsername,
      slackUsername: req.body.slackUsername,
    });

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const me = async (req, res) => {
  const scopes = ["withoutPassword", "withoutToken", "withProfile"];

  try {
    const user = await userServices.getUserById(scopes, req.user.id);
    return res.status(200).json({
      data: user.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

var rand, host, link;
var mailOptions = {
  to: null,
  subject: "Please confirm your Email account",
  html: null
};
const resendEmail = async (req, res) => {

  rand = Math.floor((Math.random() * 100) + 54);
  host = req.get('host');
  link = "http://" + req.get('host') + "/verify?id=" + rand;
  mailOptions.to = req.body.email;
  mailOptions.html = "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
    link + ">Click here to verify</a>";
  try {
    const data = await awsService.sendEmail(mailOptions);
    res.status(200).json({
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const emailVerify = async (req, res) => {
  if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
    if (req.query.id == rand) {
      await models.User.update({ isVerified: true }, { where: { email: req.body.email } });

      res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
    }
    else {
      winstonLevelLogger.error("email is not verified");
      res.end("<h1>Bad Request</h1>");
    }
  }
  else {
    res.end("<h1>Request is from unknown source");
  }
};

module.exports = {
  me,
  login,
  register,
  resendEmail,
  emailVerify,
};
