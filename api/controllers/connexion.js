const User = require('../database/userModel')

module.exports = {
    get: (req, res) => {
        res.render('connexion')
    },

    postConnexion: async (req, res) => {
        const userAuth = await User.findOne({ email: req.body.email })
        console.log(userAuth);
        
        if (!userAuth) {
            res.redirect('/connexion')
        } else {
            const { email, password } = req.body
            const sess = req.session 

            User.findOne({email}, (err, User) => {
                sess.userId           = User.id
                sess.firstname       = sess.firstname
                sess.lastname        = sess.lastname
                sess.email            = User.email
                sess.status           = User.status
                sess.isVerified       = User.isVerified
                sess.isAdmin          = User.isAdmin
                sess.isBan            = User.isBan
                sess.imgUser          = User.imgUser

                if (User) {
                    if (sess.status === 'user') {
                        req.session.userId = User._id
                        res.redirect('/')
                    } else (err) 
                        console.log(err);
                                     
                } else {
                    res.redirect('/connexion')
                }
            })
        }
    }
}