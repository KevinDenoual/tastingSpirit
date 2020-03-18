const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    //  =============== EN-TETE =============== 
    whiskyName: {
        type: String,
        required: true,
    },

    lieu: {
        type: String,
    },

    origine: {
      type: String,
      required: true,
    },

    date: '',

    // =============== VISUEL ===============

    
    visuel: {
        type: Array 
    },

    limpidite: {
        type: Object 
    },
  
    // Brillance
    brillance: {
        type: Object
    },
    // Intensite
    intensite: {
        type: Array
    },
    // Capillarite
    capillarite: {
        type: Array
    },
    // Couleurs
    couleur: {
        type: Array
    },
    
    // =============== OLFACTIF ===============

    // 1er nez (avant aération)
    'first-nose': {
        type: Array
    },
    // 2eme nez (après aération)
    'second-nose': {
        type: Array
    },

    // =============== GUSTATIF ===============
    
    // Attaque
    attaque: {
        type: Array
    },
    // Acidité
    acidite: {
        type: Array
    },
    // Moelleux (consistance-rondeur-alcool)
    moelleux: {
        type: Array
    },
    // Salé
    sale: {
        type: Array
    },
    // Arômes
    arome: String,
    // Finale
    finale: {
        type: Array
    },
   
    // =============== CONCLUSION ===============

    // Qualité
    qualite: {
        type: Array
    },
    // Moment
    moment: {
        type: Array
    },
    // Association
    asso: String,
    // Prix public 
    prix: {
        type: Array
    },
    // Note
    note: Number,
   

})



module.exports = mongoose.model('degustation', userSchema)
