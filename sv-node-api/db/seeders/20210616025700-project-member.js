'use strict';

const data = [{
  id: 1,
  userId: 1,
  projectId: 1,
  isAdmin: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  projectId: 1,
  isAdmin: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  projectId: 2,
  isAdmin: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  userId: 2,
  projectId: 3,
  isAdmin: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProjectMembers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProjectMembers', null, {});
  }
};