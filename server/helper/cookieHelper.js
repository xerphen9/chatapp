const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const TokenModel = require('../models/tokenModel')
const appConfig = require('../config/appConfig')

function cookieHelper() {
    let obj = {}
    const jwtSecret = process.env.JWT_SECRET

    obj.jwtSignIn = (id, callback) => {
        let token = jwt.sign({id}, jwtSecret, {expiresIn: appConfig.development.jwtExpiration})
        return callback(token)
    }

    obj.tokenCheck = async () => {
        let expiredDate = new Date();
        expiredDate.setSeconds(expiredDate.getSeconds() + appConfig.development.jwtRefreshExpiration)

        let tokenID = uuidv4();
    }

    return obj;
}

module.exports = cookieHelper;