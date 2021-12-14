const utils = require("../../src/utils");
'use strict';

const tokens = [];
const hashes = [];
const password = "password123";

const generateTokens = async () => {
  tokens.push(await utils.generateToken());
  tokens.push(await utils.generateToken());
  tokens.push(await utils.generateToken());
}

const hashpassword = async () => {
  hashes.push(await utils.hashPassword(password, tokens[0]));
  hashes.push(await utils.hashPassword(password, tokens[1]));
  hashes.push(await utils.hashPassword(password, tokens[2]));
}

const data = [{
  id: 1,
  username: "test1 name",
  email:"jest-user@biztree.com",
  password:"",
  isVerified: true,
  isAdmin: true,
  isDeleted: false,
  token: "",
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  username: "test-user name",
  email:"test-user@email.com",
  password:"",
  isVerified: true,
  isAdmin: true,
  isDeleted: false,
  token: "",
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  username: "test-user2 name",
  email:"test-user2@email.com",
  password:"",
  isVerified: true,
  isAdmin: true,
  isDeleted: false,
  token: "",
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await generateTokens();
    data[0].token = tokens[0];
    data[1].token = tokens[1];
    data[2].token = tokens[2];
    await hashpassword();
    data[0].password = hashes[0];
    data[1].password = hashes[1];
    data[2].password = hashes[2];
    await queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
