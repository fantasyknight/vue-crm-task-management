'use strict';

const data = [{
  id: 1,
  dreamId: 1,
  projectId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  dreamId: 1,
  projectId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  dreamId: 2,
  projectId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DreamProjects', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DreamProjects', null, {});
  }
};