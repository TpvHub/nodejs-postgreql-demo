const Sequelize = require('sequelize');
const sequelize = require('./database')

class User extends Sequelize.Model { }

User.init({
    // id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    username: { type: Sequelize.STRING, unique: 'username' },
}, {
        timestamps: true,
        sequelize,
        modelName: 'user',
    })

module.exports = User