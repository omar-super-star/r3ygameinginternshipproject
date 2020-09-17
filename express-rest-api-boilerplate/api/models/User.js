const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

/*const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};*/

const tableName = 'user';

const User = sequelize.define('User', {
  game: {
    type: Sequelize.STRING,
    unique: true,
  },
  details: {
    type: Sequelize.STRING,
  },
},{tableName}); //{ hooks, tableName });

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  //delete values.password;

  return values;
};

module.exports = User;
