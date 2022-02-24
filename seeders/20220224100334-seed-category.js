'use strict';

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./categoriesData.json'))

     data.forEach(x => {
         x.updatedAt = new Date(),
         x.createdAt = new Date()
     });


module.exports = {
   up (queryInterface, Sequelize) {
  

     return queryInterface.bulkInsert('Categories', data, {})
  },

   down (queryInterface, Sequelize) {


     return queryInterface.bulkDelete('Categories', {})
  }
};
