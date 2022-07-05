const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const helpers = require('./utils/helpers');

const exp = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: '',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

exp.use(session(sess));

exp.engine('handlebars', hbs.engine);
exp.set('view engine', 'handlebars');
exp.use(express.static(path.join(__dirname, 'public')));

exp.use(routes);

sequelize.sync({ force: false }).then(() => {
  exp.listen(PORT, () => console.log(`\nServer running on port ${PORT}!`));
});
