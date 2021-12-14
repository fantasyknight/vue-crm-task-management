'use strict';

const data = [{
  id: 1,
  title: "Past Due"
},
{
  id: 2,
  title: "Due Today"
},
{
  id: 3,
  title: "Tomorrow"
}];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sections', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sections', null, {});
  }
};
