'use strict';

var bcryptjs = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, { through: 'Transaction', foreignKey: "UserId" });
     User.hasOne(models.UsersDetail, { foreignKey: "UserId" });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    Role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate(instance, options){
        //console.log(instance, '<<<<di before create')
        var salt = bcryptjs.genSaltSync(10);
        var hash = bcryptjs.hashSync(instance.password, salt); 
        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};