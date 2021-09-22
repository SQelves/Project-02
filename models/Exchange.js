const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exchanges extends Model {}

Exchanges.init(
    {
        exchangeName: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        

        
        exchangeOrg: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        exchangeBudget:{
            type: DataTypes.INTEGER,
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