const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exchanges extends Model {}

Exchanges.init(
    {
        firstName: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        

        
        lastName: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        desc:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exchanges',
      }
);

module.exports = Exchanges;