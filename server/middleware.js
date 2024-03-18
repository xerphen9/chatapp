const jwt = require('jsonwebtoken');
const appConfig = require('./config/appConfig')
const UserModel = require('./models/usersModel')

function middleware() {
    let obj = {}

    obj.userAuthentication = async (req, res, next) => {
        const jwtSecret = appConfig.development.jwtSecret
        const token = req.cookies['tokenChat']
        console.log(req.cookies['tokenChat'])
        
        if(!token) {
            let users = await UserModel.findOne({
                email: email
            })
            const { _id } = jwt.sign(token, jwtSecret)

            req.user = await UserModel.findOne({ _id}).select('_id')
            return next()
            // console.log('there is token')
            // return jwt.verify(token, jwtSecret, (err) => {
            //     console.log(token)
            //     if(err) return res.status(401).end();
    
            //     return next()
            // })
        } else {
            console.log('there is no token')
        }
    }

    return obj;
}

module.exports = middleware;