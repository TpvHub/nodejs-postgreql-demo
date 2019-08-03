const Sequelize = require('sequelize');

const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false
    }
)

module.exports = sequelize