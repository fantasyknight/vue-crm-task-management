'use strict';

const data = [{
  id: 1,
  userId: 1,
  dreamId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 1,
  dreamId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 2,
  dreamId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DreamFavorites', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DreamFavorites', null, {});
  }
};