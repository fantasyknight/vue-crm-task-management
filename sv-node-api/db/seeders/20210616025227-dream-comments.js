'use strict';

const data = [{
  id: 1,
  userId: 1,
  dreamId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  dreamId: 1,
  comment: "comment_2",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  dreamId: 1,
  comment: "comment_3",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  userId: 1,
  dreamId: 2,
  comment: "comment_4",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 5,
  userId: 1,
  dreamId: 3,
  comment: "comment_5",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 6,
  userId: 2,
  dreamId: 3,
  comment: "comment_6",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DreamComments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DreamComments', null, {});
  }
};