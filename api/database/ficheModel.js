const mongoose = require('mongoose')


const ficheSchema = new mongoose.Schema({

    whiskyName: {
        type: String
    },
    distillerie: {
        type: String
    },
    type: {
        type: String
    },
    origine: {
        type: String
    },
    finition: {
        type: String
    },
    titre: {
        type: String
    },
    prix: {
        type: Number
    },
    imgFiche: {
        type: String
    }
})



module.exports = mongoose.model('fiche', ficheSchema)