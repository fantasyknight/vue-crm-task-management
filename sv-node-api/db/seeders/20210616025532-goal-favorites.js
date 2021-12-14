'use strict';

const data = [{
  id: 1,
  userId: 1,
  goalId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GoalFavorites', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GoalFavorites', null, {});
  }
};