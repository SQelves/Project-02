const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gifts extends Model {}

Gifts.init(
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      
    },
    description: {
      type: DataTypes.STRING,
      primaryKey: true,
      
    }
     
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gifts',
  }
);

module.exports = Gifts;
