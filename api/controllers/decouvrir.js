const userCollection = require('../database/userModel');


module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('Homepage/decouvrir', { dbUserId })
    }
}