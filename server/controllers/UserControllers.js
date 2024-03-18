const cookieHelper = require('../helper/cookieHelper.js')
const bcrypt = require('bcrypt')
const UserModel = require('../models/usersModel.js')

const createUser = async (req, res, next) => {
    const {email, password} = req.body
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    let hashPassword = bcrypt.hashSync(password.toString(), salt)
    console.log(hashPassword)

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

const loginUser = async (req, res) => {
    const _cookieHelper = cookieHelper()
    const {email, password} = req.body

    try {
        let users = await UserModel.findOne({
            email
        })

        if(users && (bcrypt.compareSync(password, users.password))) {
            console.log('masuk')
            _cookieHelper.jwtSignIn(users._id, async (token) => {
                return res.status(200).cookie('tokenChat', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: true,
                })
            })
        } else {
            return res.status(400).json({msg: 'Invalid Email/Password'})
        }
    } catch (error) {
        return res.status(401).json({msg: 'Something went wrong'})
    }
}


const logoutUser = async (req, res) => {
    try {
        res.cookie('tokenChat', "", {maxAge: 0})
        res.status(200).json({msg: 'Logged out successfully'})
    } catch (error) {
        return res.status(500).json({msg: 'Interval server error'})
    }
}

module.exports = { createUser, loginUser, logoutUser }