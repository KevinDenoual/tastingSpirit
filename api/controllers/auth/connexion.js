const User = require('../../database/userModel')
const bcrypt = require('bcrypt')

module.exports = {
    get: async (req, res) => {
        res.render('Co&password/connexion')
    },

    postConnexion: async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        const userAuth = await User.findOne({email : req.body.email})
        console.log(userAuth)
        
        if (!userAuth) {
            res.json({ message: "Email or password not found"})
            // res.redirect('/connexion')
        } else {
            
            const sess = req.session 

            bcrypt.compare(password, userAuth.password, (err, same) => {

                if (!same) {
                    console.log('error password')      
                    res.json({ message: "Email or password not found"})
                } else {
                    
                        sess.userId           = userAuth.id
                        sess.firstname        = userAuth.firstname
                        sess.lastname         = userAuth.lastname
                        sess.email            = userAuth.email
                        sess.status           = userAuth.status
                        sess.isVerified       = userAuth.isVerified
                        sess.isAdmin          = userAuth.isAdmin
                        sess.isBan            = userAuth.isBan
                        sess.imgUser          = userAuth.imgUser
                    console.log(sess);
                    
                        res.redirect('/')
                }
            })
            
        }

    }
}