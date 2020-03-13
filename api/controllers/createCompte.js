const userModel = require('../database/userModel')

module.exports = {
    get: (req, res) => {
        res.render('createCompte')
    },

    postCreateCompte: (req, res) => {
        const Pass = req.body.password
        
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
            res.redirect('/')
        )
    }
}