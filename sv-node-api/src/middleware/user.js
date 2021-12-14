const userServices = require("../services/user.services");

const checkUserIdValidation = async (req, res, next) => {
  try {
    const scopes = [{ method: ["byIds", req.body] }];
    const users = await userServices.getUsers(scopes, {});

    if (req.body.length !== users.length) {
      return res.status(409).json({
        message: "Invalid userId",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  checkUserIdValidation,
};
