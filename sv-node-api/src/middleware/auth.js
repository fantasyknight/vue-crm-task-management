const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!user.data.isVerified) {
      return res.status(403).json({
        message: "Email is not verified.",
      });
    }

    req.user = { ...user.data };
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token or expired token",
    });
  }
};

const checkAdmin = (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({
        message: "Not enought permission to access",
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
  checkAuth,
  checkAdmin,
};
