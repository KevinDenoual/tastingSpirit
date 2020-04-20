const authCheck = require('../database/passportModel')

module.exports = (req, res, next) => {
    authCheck.findById(req.session.userId,
        (error, user) => {
            if (error || !user) {
                res.redirect('/connexion')
            } else {
                next()
            }
        })
}