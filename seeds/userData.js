const { User } = require('../models');

const userData = [
  {
    username: 'Sal',
    email: 'sal@hotmail.com',
    password: 'password12345',
  },
  {
    username: 'testUser',
    email: 'u@test.com',
    password: 'u',
  },
  {
    username: 'Amiko',
    email: 'amiko2k20@aol.com',
    password: 'password12345',
  },
  {
    username: 'm',
    email: 'm@m.com',
    password: 'm',
  },
  {
    username: 'c',
    email: 'c@c.com',
    password: 'c',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
