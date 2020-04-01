const messageModel = require('../../database/messageModel')

module.exports = {
    get: async (req, res) => {
        const dbMessage = await messageModel.find(req.params.id)
        res.render('admin/message', {dbMessage} )
    },

    post: (req, res) => {

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