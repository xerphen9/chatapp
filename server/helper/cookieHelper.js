const jwt = require('jsonwebtoken');

function cookieHelper() {
    let obj = {}
    const jwtSecret = process.env.JWT_SECRET

    obj.jwtSignIn = (id, callback) => {
        const token = jwt.sign({id}, jwtSecret, {expiresIn: '1d'})
        return callback(token)
    }

    return obj;
}

module.exports = cookieHelper;