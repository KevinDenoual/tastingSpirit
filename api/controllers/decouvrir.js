const userCollection = require('../database/userModel');

/********************** Afichage page découvrir **********************/ 
module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        var  accept = ""
                if(req.cookies.CookieAccept){
                accept = "true"
                }
        res.render('Homepage/decouvrir', { dbUserId, accept })
    }
}