const sequelize = require('../config/connection');
const { User, Gifts } = require('../models');

const userData = require('./userData.json');
const listData = require('./listData.json');
const giftsData = require('./giftsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
  .then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err);
  })

  
  for (const gifts of giftsData) {
    await Gifts.create({
      ...gifts,
    })
    .then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }

  process.exit(0);
};

seedDatabase();
