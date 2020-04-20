const userModel = require('../../database/userModel')
const userCollection = require('../../database/userModel');


module.exports = {
    get: async (req, res) => {
        const dbUser = await userModel.find({})
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('admin/admin', { dbUser, dbUserId } )
    }
}