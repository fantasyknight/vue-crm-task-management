'use strict';

const data = [{
  id: 1,
  text: 'todo',
  companyId: 1,
  color: '#00ffff',
  order: 0,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 2,
  text: 'progress',
  companyId: 1,
  color: '#0000ff',
  order: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 3,
  text: 'blocked',
  companyId: 1,
  color: '#ff0000',
  order: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  id: 4,
  text: 'done',
  companyId: 1,
  color: '#00ff00',
  order: 3,
  createdAt: new Date(),
  updatedAt: new Date()
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Statuses', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};