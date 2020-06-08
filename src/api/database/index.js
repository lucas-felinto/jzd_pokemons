const Sequelize = require ("sequelize")

const connection = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: { 
        options: {
          encrypt: true,
          schema: process.env.DB_SCHEMA
        }
      }
})

module.exports = connection