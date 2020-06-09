const ficheModel = require('../database/ficheModel')
const userCollection = require('../database/userModel');

/********************** Afichage page rechercher **********************/ 
module.exports = {
    get: async (req, res) => {
        const dbFiche = await ficheModel.find(req.params.id)
        const dbUserId = await userCollection.findById(req.session.userId)
        var  accept = ""
                if(req.cookies.CookieAccept){
                accept = "true"
                }
        res.render('Homepage/rechercher', { dbFiche, dbUserId, accept })
    }, 

    
}