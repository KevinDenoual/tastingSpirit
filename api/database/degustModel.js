const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    //  =============== EN-TETE =============== 
    head: {
            whiskyName: {
                type: String
            },
        
            lieu: {
                type: String,
            },
        
            origine: {
            type: String
            },
        
            date: {
                type: String
            }
    },
    
    // =============== VISUEL ===============

    visuel: {
        limpidite: {
            type: String            
        },
        brillance: {
            type: String  
        },
        intensite: {
            type: String
        },
        capillarite: {
            type: String             
        },
        couleur: {
            type: String                
        }
    }, 

    // =============== OLFACTIF ===============

    olfactif: {
        franchise: {
            type: String           
        },
        intensiteOl: {
            type: String
        },
        textfamille: {
            type: String
        },
        textaromes: {
            type: String
        },
        textfamillebis: {
            type: String
        },
        textaromesbis: {
            type: String
        }    
     },

    // =============== GUSTATIF ===============
    
    gustatif: {
        attaque: {
            type: String
        },
        acidite: {
            type: String
        },
        moelleux: {
            type: String
        },
        sale: {
            type: String
        },
        arome: {
            type: String
        },
        finale: {
            type: String
        }
    },

     // =============== CONCLUSION ===============

    conclusion: {
        qualite: {
            type: String
        },
        moment: {
            type: String
        },
        association: {
            type: String
        },
        prix: {
            type: String
        },
        note: {
            type: Number
        }
    }


})



module.exports = mongoose.model('degustation', userSchema)
