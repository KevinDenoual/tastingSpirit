const userCollection = require('../database/userModel');

/********************** Afichage page home page **********************/ 
module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        var  accept = ""
                if(req.cookies.CookieAccept){
                accept = "true"
                }
        // console.log(dbUserId);
        
        res.render('Homepage/home', { dbUserId, accept })
    }
}