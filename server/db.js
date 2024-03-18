const mongoose = require('mongoose')
const appConfig = require('./config/appConfig.js')

mongoose.set('strictQuery', true)

const connectDB = () => {
    try {
        mongoose.connect(appConfig.development.Mongo_URI)
        console.log('MongoDB is connected...')
    } catch (error) {
        console.warn(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;