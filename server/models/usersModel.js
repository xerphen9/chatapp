const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        max: 12,
        default: null,
    },
    phone: {
        type: Number,
        unique: true,
        max: 12,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: '',
    },
    is_online: {
        type: Boolean,
    },
    contacts: {
        type: Number,
        default: 0,
    },
})

module.exports = UserModel = mongoose.model('User', userSchema)