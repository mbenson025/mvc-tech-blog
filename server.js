const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');

const routes = require('./controllers');

const exp = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  exp.listen(PORT, () => console.log(`\nServer running on port ${PORT}`));
});
