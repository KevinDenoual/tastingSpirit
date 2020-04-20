const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../database/userModel');

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();

passport.serializeUser((user, done) => { // done is a callback from passport
    done(null, user.id)                    // if this stage is ok (done) we go to the next step
})
                                        // we only sending out id in cookie and when it comes back that cookie we're just retrieving that is from the cookie but who does that id belong to you ?
passport.deserializeUser((id, done) => { // we successfully passed the previous step 
    User.findById(id).then((user) => {  // if id existed in database 
        done(null, user)             // now we have the user from the user ID right
    })
})


// *********************** Google Srategy ***********************

passport.use(new GoogleStrategy({
    //option for the google strat
    callbackURL: '/connexion/google/redirect',
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // check of user already exists in our db
    console.log(profile)
    console.log('Callback passport facebook OK');
    
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have the user
            console.log('user is', currentUser);
            done(null, currentUser)
        } else {
            // if not, create user in ou db
            new User({
                userGoogleName: profile.displayName,
                googleId: profile.id,
                email: profile.email,
                imgUser: profile._json.picture,
                isVerified: true
            }).save().then((newUser) => {
                console.log('new user created' + newUser)
                done(null, newUser)             
            })
        }
    })  
}
))


    