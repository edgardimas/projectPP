'use strict';
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json'))

data.forEach(x => {
    x.Role = x.role
    delete x.role
    x.updatedAt = new Date(),
    x.createdAt = new Date()
});

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    console.log(data)
   

     return queryInterface.bulkInsert('Users', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('Users', data, {})
  }
};
