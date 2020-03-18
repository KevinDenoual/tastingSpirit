const degustModel = require('../../database/degustModel')

module.exports = {
    get:  async (req, res) => {
        const dbDegust = await degustModel.find(req.params.id)
        
        res.render('profil/espacePerso', { dbDegust } )
        console.log(dbDegust);
        
    },

    post: (req, res) => {
        console.log(req.body);
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