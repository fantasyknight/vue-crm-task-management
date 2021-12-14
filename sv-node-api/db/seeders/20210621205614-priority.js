'use strict';

const data = [{
  id: 1,
  text: 'urgent',
  companyId: 1,
  color: '#DE0000',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  text: 'high',
  companyId: 1,
  color: '#DE0000',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  text: 'medium',
  companyId: 1,
  color: '#0000DE',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  text: 'low',
  companyId: 1,
  color: '#00DE00',
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Priorities', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Priorities', null, {});
  }
};