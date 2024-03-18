const dotenv =  require('dotenv');

dotenv.config()

module.exports = appConfig = {
    development: {
        Port: process.env.PORT || 5000,
        Mongo_URI: process.env.MONGO_URI ?? 0,
        jwtSecret: process.env.JWT_SECRET ?? ''
    }
}