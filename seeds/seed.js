const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedComment();

  process.exit(0);
};

seedDatabase();
