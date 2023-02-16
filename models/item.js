'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Champion, {
        foreignKey: 'championId',
      })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    itemType: {
      type: DataTypes.ENUM('AD', 'AP', 'Tank'),
      defaultValue: 'AD'
    },
    championId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Champions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};