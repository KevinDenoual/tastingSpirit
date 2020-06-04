const ficheModel = require('../../database/ficheModel')
const userCollection = require('../../database/userModel');


module.exports = {
    get: async (req, res) => {
        const dbUserId = await userCollection.findById(req.session.userId)
        res.render('admin/createFiche', { dbUserId })
    },

    postFiche: (req, res) => {
        const whiskyName = req.body.whiskyName
        const distillerie = req.body.distillerie
        const type = req.body.type
        const origine = req.body.origine
        const finition = req.body.finition
        const titre = req.body.titre
        const prix = req.body.prix

        console.log(req.body);
        

        ficheModel.create(
            {
                whiskyName: whiskyName,
                distillerie: distillerie,
                type: type,
                origine: origine,
                finition: finition,
                titre: titre,
                prix: prix,
                imgFiche: `/assets/images/${req.file.originalname}`, 
            },
            (err) => { 
                if (err) console.log(err)
                
                else res.redirect('/admin/createFiche')
            }
        )
    },

    deleteFiche: (req, res) => {
        const query = { _id: req.params.id }
        

          ficheModel.deleteOne(
            query,

            (err) => {
                if (!err) {
                    res.redirect('/rechercher')
                } else {
                    res.send(err)
                }
            }
        )
    },

    putFiche: (req, res) => {
        const query = { _id: req.params.id }
        const whiskyName = req.body.whiskyName
        const distillerie = req.body.distillerie
        const type = req.body.type
        const origine = req.body.origine
        const finition = req.body.finition
        const titre = req.body.titre
        const prix = req.body.prix  
        if (!req.file) {
            if (!req.body) {
                console.log('no req.body')
            } else if (req.body) {

                ficheModel.findOneAndUpdate(
                    query,
                    {
                        whiskyName: whiskyName,
                        distillerie: distillerie,
                        type: type,
                        origine: origine,
                        finition: finition,
                        titre: titre,
                        prix: prix,
                        
                    },
                    { multi: true },
                    (err) => {
                        if (!err) {
                            res.redirect('/')
                        } else {
                            res.send(err)
                        }
                    })
            } else {
                console.log('no req.file');
            }
        } else {
            ficheModel.findOneAndUpdate(
                query,
                {
                    whiskyName: whiskyName,
                    distillerie: distillerie,
                    type: type,
                    origine: origine,
                    finition: finition,
                    titre: titre,
                    prix: prix,
                    imgFiche: `/assets/images/${req.file.originalname}`,
                },
                { multi: true },
                (err) => {
                    if (!err) {
                        res.redirect('/')
                    } else {
                        res.send(err)
                    }
                })
        }
    }
}
