'use strict';

const data = [{
  id: 1,
  userId: 1,
  firstName: "firstName1",
  lastName: "lastName1",
  birthday: new Date(),
  location: "Montreal Canada",
  gender: "male",
  phone: "+1 5143267324",
  avatarUrl: "avatarUrl_1",
  fbUsername: "fbUsername_1",
  skypeUsername: "skypeUsername_1",
  slackUsername: "slackUsername_1",
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  firstName: "firstName2",
  lastName: "lastName2",
  birthday: new Date(),
  location: "Montreal Canada",
  gender: "male",
  phone: "+1 5143267324",
  avatarUrl: "avatarUrl_2",
  fbUsername: "fbUsername_2",
  skypeUsername: "skypeUsername_2",
  slackUsername: "slackUsername_2",
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  firstName: "firstName3",
  lastName: "lastName3",
  birthday: new Date(),
  location: "Montreal Canada",
  gender: "male",
  phone: "+1 5143267324",
  avatarUrl: "avatarUrl_3",
  fbUsername: "fbUsername_3",
  skypeUsername: "skypeUsername_3",
  slackUsername: "slackUsername_3",
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Profiles', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
