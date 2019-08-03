require('dotenv').config({
    path: `./.env.${process.env.NODE_ENV || 'development'}`
})

const sequelize = require('./database')

const User = require('./users.model')

const connectDatabase = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
}

const main = async () => {
    try {
        await connectDatabase()
        console.log('Connection database has been established successfully.');

        await User.create({
            username: 'user5'
        })

    } catch (err) {
        console.log('app crashed: ', err.message)
        process.exit(1)
    }
}

main()