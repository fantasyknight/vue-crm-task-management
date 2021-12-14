'use strict';

const data = [{
  id: 1,
  goalId: 1,
  taskId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  goalId: 1,
  taskId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  goalId: 2,
  taskId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GoalTasks', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GoalTasks', null, {});
  }
};