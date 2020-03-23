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

    // =============== VISUEL ===============

    // limpidite: {
        
    //     trouble: String,
    //     flou: String,
    //     opalescent: String,
    //     limpide: String
    // },

    // brillance: {
        
    //     terne: String,
    //     lumineuse: String,
    //     opalescent: String,      
    // },

    // intensite: {
       
    //     pale: String,
    //     claire: String,
    //     soutenue: String
    // },

    // capillarite: {
        
    //     coulante: String,
    //     epaisse: String,
    //     grasse: String,
    //     visqueuse: String
    // },

    // couleur: {
        
    //     vert: String,
    //     dore: String,
    //     paille: String,
    //     ambre: String
    // }
   

    // =============== OLFACTIF ===============

    // olfactif: {
    //             firstnose: {
    //                 type: Object           
    //             },
    //             secondnose: {
    //                 type: Object
    //             }    
    // },
    
    
    // // =============== GUSTATIF ===============
    
    // gustatif: {
    //             attaque: {
    //                 type: Object
    //             },
    //             acidite: {
    //                 type: Object
    //             },
    //             moelleux: {
    //                 type: Object
    //             },
    //             sale: {
    //                 type: Object
    //             },
    //             arome: {
    //                 type: Object
    //             },
    //             finale: {
    //                 type: Object
    //             }
    // },
   
    // // =============== CONCLUSION ===============

    // conclusion: {
    //             qualite: {
    //                 type: Object
    //             },
    //             moment: {
    //                 type: Object
    //             },
    //             association: {
    //                 type: Object
    //             },
    //             prix: {
    //                 type: Object
    //             },
    //             note: {
    //                 type: Object
    //             }
    // }

})



module.exports = mongoose.model('degustation', userSchema)
