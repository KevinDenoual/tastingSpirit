/*
 *
 * Controller/auth/facebookAuth
 ************************************/

const express = require('express')
const router = express.Router()
const User = require('../../database/userModel')
const passport = require('passport')
const path = require('path')

router.get("/connexion/facebook", passport.authenticate("facebook"));

router.get(
  "/connexion/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

router.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

router.get("/", (req, res) => {
  res.send("Success");
});

module.exports = router