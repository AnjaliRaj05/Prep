const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected!');
  } catch (err) {
    console.error('❌ PostgreSQL connection error:', err.message);
  }
};

module.exports = { sequelize, connectDB };
