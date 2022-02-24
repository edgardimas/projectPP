'use strict';
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
      Post.belongsToMany(models.Tag, { through: 'Transaction', foreignKey: "PostId" });
      Startup.belongsTo(models.UserDetails, {foreignKey: "UserId"})
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    Role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};