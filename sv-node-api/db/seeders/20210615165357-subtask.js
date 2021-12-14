"use strict";

const data = [
  {
    id: 1,
    taskId: 1,
    statusId: null,
    title: "title_1",
    description: "description_1",
    dueDate: new Date(),
    priority: null,
    budget: 10,
    isDeleted: false,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    taskId: 1,
    statusId: null,
    title: "title_1",
    description: "description_1",
    dueDate: new Date(),
    priority: null,
    budget: 10,
    isDeleted: false,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    taskId: 1,
    statusId: null,
    title: "title_1",
    description: "description_1",
    dueDate: new Date(),
    priority: null,
    budget: 10,
    isDeleted: false,
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("SubTasks", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("SubTasks", null, {});
  },
};
