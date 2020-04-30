const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
    },
    
    lastname: {
        type: String,     
    },

    email: {
        type: String,  
        unique: true,
    },

    password: {
        type: String,     
    },

    userGoogleName: {
        type: String
    },

    googleId: {
        type: String
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

userSchema.pre('save', function ( next ) {
    const user = this
    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted
        next()
    })
})


module.exports = mongoose.model('usercollection', userSchema)
