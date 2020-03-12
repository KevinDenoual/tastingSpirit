const userModel = require('../../database/userModel')


module.exports = {
    getListUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('admin/userList', { dbuser })
        
    },

    putListUser: (req, res) => {
        const query = { _id: req.params.id }
        console.log(req.body.isVerified);
        
        userModel.findOneAndUpdate(
            query,
            {
                isVerified: req.body.isVerified,
                isBan: req.body.isBan
            },

            (err) => {
                if (!err) {
                    res.redirect('/admin/userList')
                } else {
                    res.render(err)
                }
            }
        )
    },

    deleteOne: (req, res) => {
        const query = { _id: req.params.id }
        
        userModel.deleteOne(query,
            (err) => {
                
                if (!err) {
                    res.redirect('/admin/userList')
                } else {
                    res.render(err)
                }
            })
    }
}