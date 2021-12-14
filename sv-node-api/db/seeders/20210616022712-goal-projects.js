'use strict';

const data = [{
  id: 1,
  goalId: 1,
  projectId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  goalId: 1,
  projectId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  goalId: 1,
  projectId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GoalProjects', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GoalProjects', null, {});
  }
};