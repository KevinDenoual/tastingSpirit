/*
 *
 * Controller /auth/google
 ************************************/

const express = require('express')
const router = express.Router()
const User = require('../../database/userModel')
const passport = require('passport')
const path = require('path')

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/redirect', passport.authenticate('google'), async (req, res) => {
    let userAuth = await User.findOne({ _id: req.user._id })
    if (!userAuth) {
        console.log("pas ds la db");
        res.redirect('/');
    } else {
        const dbUser = await User.find({})
        const userGoogleName = req.user.userGoogleName          
        const sess = req.session

        User.findOne({ userGoogleName }, (error, User) => {
            
            sess.email = User.email
            sess.status = User.status
            sess.pseudo = User.pseudo
            sess.isVerified = User.isVerified
            sess.imgUser = User.imgUser
            sess.userId = User._id

            if (User) {

                if (sess.status === 'user') {
                    
                    req.session.userId = User._id
                    console.log('OK 1')
                    
                    res.redirect('/')
                } else {
                        console.log('Mot de passe incorrect')
                        res.redirect('/')
                    
                }
            }
        })
    }
})

module.exports = router