const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'user'
    },
    isVerified:{
        type: Boolean,
        default: false
    },

    
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBan: {
        type: Boolean,
        default: false,
    },
    imgUser: {
        type: String,
        default: "https://i.stack.imgur.com/34AD2.jpg"
    }
})







module.exports = mongoose.model('usercollection', userSchema)
