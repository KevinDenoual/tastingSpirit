const ficheModel = require('../database/ficheModel')
const userCollection = require('../database/userModel');


module.exports = {
    get: async (req, res) => {
        const dbFiche = await ficheModel.find(req.params.id)
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('Homepage/rechercher', { dbFiche, dbUserId })
    }, 

    
}