const userModel = require('../../database/userModel')
const keys = require('../../config/keys')

// Nodemailer import + setup
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 587,
    secure: true, 
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
    get: (req, res) => {
        res.render('Co&password/forgotpassword')
    },

    post: async (req, res) => {
        const userEmail = userModel.findOne({ email: req.body.email })
        console.log(userEmail);
        
        // Nodemailer config
        rand = Math.floor((Math.random() * 100) + 54)
        host = req.get('host')
        link = "http://" + req.get('host') + "/newpassword/" + rand
        mailOptions = {
            from: 'regis.dupond666@gmail.com',
            to: req.body.email, 
            subject: 'Forgot password',
            rand: rand,
            html: "Hello,<br> Please Click on the link to change your password.<br><a href=" + link + ">Click here</a>",
        }

        if (!userEmail) {
            res.send("email n'existe pas dans la db")
        } else {
            // Nodemailer transport
            transporter.sendMail(mailOptions, (err, res, next) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log('message envoyé')
                    next()
                }
            }),
            res.redirect('/')
        }
 
    },

    // Nodemailer verif 
    linkNewPassword: async (req, res) => {
    
        if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
            console.log("Domain is matched. Information is from Authentic email")
            if (req.params.id == mailOptions.rand) {

                res.redirect('/newpassword')
                                  
            } else {
                res.rend("bad request")
            }
        } else {
            res.send('request is from unknow source')
        }
        
    }
    
}