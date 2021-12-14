const bcryptjs = require("bcryptjs");

/**
 * Compare passwords
 * @param {string} password
 * @param {string} dbPassword
 * @return {string}
 */
const passwordCompare = async (password, dbPassword) => {
  return await bcryptjs.compare(password, dbPassword);
};

/**
 * Generate Token
 * @param {integer} size
 * @return {string}
 */
const generateToken = async (size = 10) => {
  return await bcryptjs.genSalt(size);
};

/**
 * Hash password
 * @param {string} password
 * @param {string} hash
 * @return {object}
 */
const hashPassword = async (password, hash) => {
  return await bcryptjs.hash(password, hash);
};

module.exports = {
  passwordCompare,
  generateToken,
  hashPassword,
};
