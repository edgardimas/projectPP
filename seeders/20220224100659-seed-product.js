'use strict';

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./productData.json'))

     data.forEach(x => {
         x.productname = x.product_name
         delete x.product_name
         x.updatedAt = new Date(),
         x.createdAt = new Date()
     });

module.exports = {
   up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Products', data, {})
  },

   down (queryInterface, Sequelize) {


     return queryInterface.bulkDelete('Products', {})
  }
};
