const ficheModel = require('../../database/ficheModel')

module.exports = {
    get: (req, res) => {
        res.render('admin/createFiche')
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
                prix: prix
            },
            (err) => { 
                if (err) console.log(err)
                
                else res.redirect('/admin/createFiche')
            }
        )
    }
}