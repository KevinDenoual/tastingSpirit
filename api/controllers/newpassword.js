const userModel = require('../database/userModel')
const bcrypt = require('bcrypt')

module.exports = {
    get: (req, res) => {
        res.render('Co&password/newpassword')
    },

    postNewPassword: async (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        const user = await userModel.findById(req.params.id)
        
        if (Pass !== confPass) {
            res.redirect('/newpassword')
        } else {
            const hashPass = bcrypt.hashSync(Pass,10)
                
                userModel.findOneAndUpdate(
                    user, 
                    {
                       password: hashPass
                    },
                    
                    (err) => {
                       if (!err) {
                           res.redirect('/')
                       } else {
                           res.rend(err)
                       }
                   }                
                )           
        }
        console.log('bravo')
    }
}
