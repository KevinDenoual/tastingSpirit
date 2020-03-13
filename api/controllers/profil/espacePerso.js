const degustModel = require('../../database/degustModel')

module.exports = {
    get: (req, res) => {
        res.render('profil/espacePerso')
    },

    post: (req, res) => {
        // console.log(req.body);
        degustModel.create(
            {
                ...req.body
            },
            (err) => {
                res.redirect('/espacePerso')
            }
        )
    }
}