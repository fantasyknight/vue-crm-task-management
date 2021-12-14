'use strict';

const data = [{
  id: 1,
  userId: 1,
  taskId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TaskFavorites', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TaskFavorites', null, {});
  }
};