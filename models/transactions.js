'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    UserId: { type: DataTypes.INTEGER, 
      references:{
        model:{
          tableName: "Users"
        },
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    },
    ProductsId: { type: DataTypes.INTEGER, 
      references:{
        model:{
          tableName: "Products"
        },
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};