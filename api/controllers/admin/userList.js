const userModel = require('../../database/userModel')


module.exports = {
    getListUser: async (req, res) => {
        const dbuser = await userModel.find(req.params.id)
        res.render('admin/userList', { dbuser })
        
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
    },

    modifStatus: (req, res) => {
        const query = { _id: req.params.id }
        const verifTrue = (req.body.verifTrue == 'true' || false)
        const banTrue = (req.body.banTrue == 'true' || false)

        console.log(verifTrue);
        console.log(banTrue);
        
    
                    
        //     if  ( verifTrue === 'true' ) {
        //         userModel.findByIdAndUpdate(
        //         query,
        //         {
        //             isVerified: 'true'
        //         },
        //         (err) => {
        //             if (!err) {
        //                 res.redirect('/admin/userList')
        //             } else {
        //                 res.render(err)
        //             }
        //         }
        //     )
        // } else if ( verifTrue === false ) {
        //          userModel.findByIdAndUpdate(
        //              query,
        //             {
        //                 isVerified: false
        //             },
        //             (err) => {
        //                 if (!err) {
        //                     res.redirect('/admin/userList')
        //                 } else {
        //                     res.render(err)
        //                 }
        //             }
        //         )
        // } else if ( banTrue === 'true' ) {
        //     userModel.findByIdAndUpdate(
        //         query,
        //        {
        //            isBan: true
        //        },
        //        (err) => {
        //            if (!err) {
        //                res.redirect('/admin/userList')
        //            } else {
        //                res.render(err)
        //            }
        //        }
        //    )
        // }
            
    }
}