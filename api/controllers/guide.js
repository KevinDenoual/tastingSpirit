const userCollection = require('../database/userModel');

/********************** Afichage page guide **********************/ 
module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        var  accept = ""
                if(req.cookies.CookieAccept){
                accept = "true"
                }
        res.render('Homepage/guide', { dbUserId, accept })
    }
}