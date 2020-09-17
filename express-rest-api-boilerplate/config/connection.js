const development = {
  database: 'databasename',
  username: 'omar',
  password: 'omar',
  host: 'localhost',
  dialect: 'sqlite' ,
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};
DB_NAME="database";
DB_USER="omar";
DB_PASS="omar";
DB_HOST="localhost";
JWT_SECERT="omar2020"
const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
