'use strict';

const data = [{
  id: 1,
  userId: 1,
  title: "title_1",
  link: "link.com",
  type: 1,
  isRead: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 1,
  title: "title_1",
  link: "link.com",
  type: 2,
  isRead: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 1,
  title: "title_1",
  link: "link.com",
  type: 3,
  isRead: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};