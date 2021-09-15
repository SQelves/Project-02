const sequelize = require('../config/connection');
const { User, List, Gifts } = require('../models');

const userData = require('./userData.json');
const listData = require('./projectData.json');
const giftsData = require('./giftsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const list of listData) {
    await List.create({
      ...list,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const gifts of giftsData) {
    await Gifts.create({
      ...gifts,
    });
  }

  process.exit(0);
};

seedDatabase();
