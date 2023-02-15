'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Champion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Champion.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    region: DataTypes.STRING,
    arcane: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Champion',
  });
  return Champion;
};