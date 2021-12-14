'use strict';

const data = [{
  id: 1,
  companyId: 1,
  sectionId: 1,
  statusId: 2,
  title: "Task - 1",
  description: "description_1",
  dueDate: new Date(),
  priority: 2,
  budget: 10,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  companyId: 1,
  sectionId: 1,
  statusId: 3,
  title: "Task - 2",
  description: "description_2",
  dueDate: new Date(),
  priority: 1,
  budget: 20,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  companyId: 1,
  sectionId: 1,
  statusId: 2,
  title: "Task - 3",
  description: "description_3",
  dueDate: new Date(),
  priority: 1,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  companyId: 1,
  sectionId: 2,
  statusId: 2,
  title: "Task - 4",
  description: "description_3",
  dueDate: new Date(),
  priority: 1,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 5,
  companyId: 1,
  sectionId: 2,
  statusId: 2,
  title: "Task - 5",
  description: "description_3",
  dueDate: new Date(),
  priority: 1,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 6,
  companyId: 1,
  sectionId: 2,
  statusId: 2,
  title: "Task - 6",
  description: "description_6",
  dueDate: new Date(),
  priority: 1,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 7,
  companyId: 1,
  sectionId: 3,
  statusId: 2,
  title: "Task - 7",
  description: "description_7",
  dueDate: new Date(),
  priority: 2,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 8,
  companyId: 1,
  sectionId: 2,
  statusId: 2,
  title: "Task - 8",
  description: "description_8",
  dueDate: new Date(),
  priority: 1,
  budget: 30,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 9,
  companyId: 1,
  sectionId: 2,
  statusId: 2,
  title: "Task - 9",
  description: "description_9",
  dueDate: new Date(),
  priority: 3,
  budget: 50,
  isDeleted: false,
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
