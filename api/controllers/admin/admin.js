const userModel = require('../../database/userModel')

module.exports = {
    get: async (req, res) => {
        const dbUser = await userModel.find({})
        res.render('admin/admin', { dbUser } )
    }
}