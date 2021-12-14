'use strict';

const data = [{
  id: 1,
  userId: 1,
  companyId: 1,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  userId: 2,
  companyId: 2,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  userId: 3,
  companyId: 3,
  isAdmin: true,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CompanyMembers', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CompanyMembers', null, {});
  }
};