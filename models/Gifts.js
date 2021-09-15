const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gifts extends Model {}

Gifts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gifts_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'id',
      },
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
