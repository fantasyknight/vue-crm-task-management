'use strict';

const data = [{
  id: 1,
  userId: 1,
  name: "name1",
  email:"jest-user@biztree.com",
  description:"description1",
  logoUrl: "",
  location:"",
  phone: "",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  name: "name2",
  email: "test-user@email.com",
  description: "description_2",
  logoUrl: "",
  location: "",
  phone: "",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  name: "name3",
  email: "test-user2@email.com",
  description: "description3",
  logoUrl: "",
  location: "",
  phone: "",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
