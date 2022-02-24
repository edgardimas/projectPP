'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     return queryInterface.addColumn('Transactions', 'UserId', {
      type: Sequelize.INTEGER,
      references: { model: {tableName: 'Users'}, key: 'id' },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });

    

  },

   down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.removeColumn('Transaction', 'UserId', {})
  }
};
