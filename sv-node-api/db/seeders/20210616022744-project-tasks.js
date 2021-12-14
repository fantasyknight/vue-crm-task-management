'use strict';

const data = [{
  id: 1,
  projectId: 1,
  taskId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  projectId: 1,
  taskId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  projectId: 3,
  taskId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProjectTasks', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProjectTasks', null, {});
  }
};