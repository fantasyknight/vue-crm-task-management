'use strict';

const data = [{
  id: 1,
  userId: 1,
  subtaskId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  subtaskId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  subtaskId: 2,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  userId: 2,
  subtaskId: 3,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubTaskMembers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubTaskMembers', null, {});
  }
};