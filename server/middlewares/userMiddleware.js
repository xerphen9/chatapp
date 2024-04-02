const jwt = require('jsonwebtoken');
const appConfig = require('../config/appConfig')

const userVerification = async (req, res, next) => {
    const jwtSecret = appConfig.development.jwtSecret
    const token = req.cookies.token
    
    if(!token) {
        return res.json({msg: 'Invalid token provided', status: false})
    }
    
    return jwt.verify(token, jwtSecret, async (err) => {
        if(err) {
            res.status(401).json({msg: err, status: false})
        } else {
            res.status(200).json({msg: 'User verified', status: true})
        }

    })
}

module.exports = {userVerification};