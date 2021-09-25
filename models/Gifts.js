const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gifts extends Model {}

Gifts.init(
  {
  
    firstName: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    
    lastName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    giftName: {
      type: DataTypes.STRING,
      primaryKey: true,
      
    },
     
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
