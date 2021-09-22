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
  });

  for (const list of listData) {
    await Project.create({
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
