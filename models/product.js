'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, { through: 'Transaction', foreignKey: "ProductsId" });
      Product.belongsTo(models.Category, {foreignKey: 'id'})
    }
  }
  Product.init({
    productname: DataTypes.STRING,
    stock: DataTypes.STRING,
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    productPicture: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};