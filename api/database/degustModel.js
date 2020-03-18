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
            "limpidite": {
                type: Object
            },
            "brillance": {
                type: Object
            },
            "intensite": {
                type: Object
            },
            "capillarite": {
                type: Object
            },
            "couleur": {
                type: Object
            }
    }, 

    // =============== OLFACTIF ===============

    olfactif: {
                "firstnose": {
                    type: Object           
                },
                "secondnose": {
                    type: Object
                }    
    },
    
    
    // =============== GUSTATIF ===============
    
    gustatif: {
                "attaque": {
                    type: Object
                },
                "acidite": {
                    type: Object
                },
                "moelleux": {
                    type: Object
                },
                "sale": {
                    type: Object
                },
                "arome": {
                    type: Object
                },
                "finale": {
                    type: Object
                }
    },
   
    // =============== CONCLUSION ===============

    conclusion: {
                "qualite": {
                    type: Object
                },
                "moment": {
                    type: Object
                },
                "association": {
                    type: Object
                },
                "prix": {
                    type: Object
                },
                "note": {
                    type: Object
                }
    }

})



module.exports = mongoose.model('degustation', userSchema)
