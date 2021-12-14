'use strict';

const data = [{
  id: 1,
  title: 'Financial',
  companyId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  title: 'Marketing',
  companyId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Departments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};