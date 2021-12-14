'use strict';

const data = [{
  id: 1,
  userId: 1,
  projectId: 1,
  comment: "comment_1",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  projectId: 1,
  comment: "comment_2",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  projectId: 1,
  comment: "comment_3",
  isDeleted: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProjectComments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProjectComments', null, {});
  }
};