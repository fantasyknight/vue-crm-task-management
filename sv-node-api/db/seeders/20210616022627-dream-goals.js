'use strict';

const data = [{
  id: 1,
  dreamId: 1,
  goalId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  dreamId: 1,
  goalId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  dreamId: 1,
  goalId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DreamGoals', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DreamGoals', null, {});
  }
};