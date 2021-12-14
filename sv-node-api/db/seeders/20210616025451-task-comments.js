'use strict';

const data = [{
  id: 1,
  userId: 1,
  taskId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  taskId: 1,
  comment: "comment_2",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  taskId: 1,
  comment: "comment_3",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TaskComments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TaskComments', null, {});
  }
};