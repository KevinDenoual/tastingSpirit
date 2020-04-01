const ficheModel = require('../database/ficheModel')

module.exports = {
    get: async (req, res) => {
        const dbFiche = await ficheModel.find(req.params.id)
        res.render('Homepage/rechercher', { dbFiche })
    }, 

    
}