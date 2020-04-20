const messageModel = require('../../database/messageModel')
const userCollection = require('../../database/userModel');


module.exports = {
    get: async (req, res) => {
        const dbMessage = await messageModel.find(req.params.id)
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('admin/message', {dbMessage, dbUserId } )
    },

    post: (req, res, end) => {

        messageModel.create(
            {
                email: req.body.email,
                message: req.body.message
            },
            (err) => { 
                if (err) console.log(err)
                
                else res.redirect('/')
            }
        )      
    },

    delete: (req, res) => {
        const query = { _id: req.params.id }
console.log(query);

        messageModel.deleteOne(
            query,

            (err) => {
                if (!err) {
                    res.redirect('/admin/message')
                } else {
                    res.send(err)
                }
            }
        )
    }
}