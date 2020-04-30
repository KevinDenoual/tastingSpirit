const userModel = require('../database/userModel')
const userCollection = require('../database/userModel');
const { check, validationResult } = require('express-validator');
const keys = require('../config/keys')



// Nodemailer import + setup
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: false, 
    auth: {
        user: keys.nodemailer.user,
        pass: keys.nodemailer.pass
    },
    tls: {
        rejectUnauthorized: false
    }
})

var rand, mailOptions, host, link

module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('create/createCompte', { dbUserId : dbUserId })
    },

    postCreateCompte: async (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const dbUserId = await userCollection.findById(req.session.userId)
        const errors = validationResult(req);
         
        

        // Nodemailer config
        rand = Math.floor((Math.random() * 100) + 54)
        host = req.get('host')
        link = "http://" + req.get('host') + "/verify/" + rand
        mailOptions = {
            from: keys.nodemailer.user,
            to: req.body.email, 
            subject: 'Please confirm your Email account',
            rand: rand,
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>",
        }
        

        if (!errors.isEmpty()) {        
            return res.status(422).render('create/createCompte', { dbUserId : dbUserId, errors: errors.array() });
        } if (Pass !== confPass) {
            res.redirect('/createCompte')
        } else {
            userModel.create(
                {
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: Pass,
                    isVerified: false,
                    isAdmin: false,
                    isBan: false
                },
                (error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        // Nodemailer transport
                        transporter.sendMail(mailOptions, (err, res, next) => {
                            if (err) {
                                console.log(err)
                                res.render(err)
                            } else {
                                console.log('message envoyé')
                                M.toast({html: 'I am a toast!'})
                                next()
                            }
                        }),
                        res.redirect('/')
                    }
                 }   
            )
        }      
    },

    // Nodemailer verif 
    verifMail: async (req, res) => {
        const userId = await userModel.findOne({ email: mailOptions.to})
        query = { _id: userId._id }

        if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
            console.log("Domain is matched. Information is from Authentic email")
            if (req.params.id == mailOptions.rand) {

                userModel.findByIdAndUpdate(
                    {_id: userId._id },
                    { isVerified: true },              
                    (err) => {
                        if (!err) {
                            res.redirect('/verifMail')
                        } else {
                            res.rend(err)
                        }
                    },                  
                )
                
            } else {
                res.rend("bad request")
            }
        } else {
            res.send('request is from unknow source')
        }
        
    }
}