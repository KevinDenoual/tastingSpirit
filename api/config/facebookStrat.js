const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../database/userModel');

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();


passport.serializeUser((user, done) => {
    done(null, user.id);
  })
  
  passport.deserializeUser((id, done) => {
      User.findById(id).then((user) => {
        done(null, user);
      })
  });

// *********************** Facebook Srategy ***********************

passport.use(new FacebookStrategy({
    //option for the facebook strat
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "http://localhost:300/connexion/facebook/redirect"
  }, (accessToken, refreshToken, profile, done) => {
      // check of user already exists in our db
    User.findOne({facebookId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have the user
            console.log('user is', currentUser);
            done(null, currentUser)
        } else {
            // if not, create user in ou db
            new User({
                
                // email: profile.email,
                // imgUser: profile._json.picture,
                // isVerified: true
            }).save().then((newUser) => {
                console.log('new user created' + newUser)
                done(null, newUser)             
            })
        }
  })
}
))