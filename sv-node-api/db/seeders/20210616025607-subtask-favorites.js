'use strict';

const data = [{
  id: 1,
  userId: 1,
  subtaskId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubTaskFavorites', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubTaskFavorites', null, {});
  }
};