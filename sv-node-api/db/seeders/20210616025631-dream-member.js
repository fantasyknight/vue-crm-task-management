'use strict';

const data = [{
  id: 1,
  userId: 1,
  dreamId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  dreamId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 2,
  dreamId: 2,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  userId: 3,
  dreamId: 2,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 5,
  userId: 3,
  dreamId: 3,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DreamMembers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DreamMembers', null, {});
  }
};