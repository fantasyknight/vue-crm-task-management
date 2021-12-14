'use strict';

const data = [{
  id: 1,
  userId: 1,
  projectId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProjectFavorites', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProjectFavorites', null, {});
  }
};