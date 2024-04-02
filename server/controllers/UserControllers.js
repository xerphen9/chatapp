const cookieHelper = require('../helper/cookieHelper.js')
const bcrypt = require('bcrypt')
const UserModel = require('../models/usersModel.js')
const appConfig = require('../config/appConfig.js')

const createUser = async (req, res) => {
    const {email, password} = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    let hashPassword = bcrypt.hashSync(password.toString(), salt)

    try {
        let userExist = await UserModel.findOne({
            email: email
        }).exec()
        
        if(userExist) {
            return res.status(400).json({msg: 'User already exists'})
        } else {
            let newUsers = await UserModel.create({
                email: email,
                password: hashPassword
            })
            if(!newUsers) return res.status(400).json({msg: 'Failed to register'})
        
            return res.status(201).json({newUsers})
        }
    } catch (error) {
        return res.status(400).json({msg: error.message})
    }
}

const loginUser = async (req, res, next) => {
    const _cookieHelper = cookieHelper()
    const {email, password} = req.body

    const options = {
        httpOnly: process.env.NODE_ENV === 'production' ? true : false, //The cookie cannot be accessed by client-side scripts
        secure: process.env.NODE_ENV === 'production' ? true : false, //only works on HTTPS
        maxAge: 259200000,
    }

    try {
        let users = await UserModel.findOne({
            email
        })

        let passwordSync = bcrypt.compareSync(password, users.password)

        if(!users) return res.status(400).json({msg: 'User not found'})

        if(!passwordSync) return res.status(400).json({msg: 'Invalid Email/Password'})

        return _cookieHelper.jwtSignIn(users._id, (token) => {
            res.status(200).cookie('token', token, options).json({msg: 'Login successful', users})
            next()
        })
    } catch (error) {
        return res.status(401).json({msg: 'Something went wrong'})
    }
}


const logoutUser = async (req, res) => {
    try {
        res.status(200).clearCookie('token').json({
            msg: 'Logged out successfully', 
            success: true
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Something went wrong', 
            success: false
        })
    }
}

module.exports = { createUser, loginUser, logoutUser }