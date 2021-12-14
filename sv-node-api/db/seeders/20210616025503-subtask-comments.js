'use strict';

const data = [{
  id: 1,
  userId: 1,
  subtaskId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  subtaskId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  subtaskId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SubTaskComments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SubTaskComments', null, {});
  }
};