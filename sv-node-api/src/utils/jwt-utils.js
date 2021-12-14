const jwt = require("jsonwebtoken");

const generateJWT = async (signature) => {
  return await jwt.sign(signature, process.env.JWT_SECRET_KEY);
};

module.exports = {
  generateJWT,
};
