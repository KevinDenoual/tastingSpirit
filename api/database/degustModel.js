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

    // Limpidite
    'limp-trouble': String,
    'limp-flou': String,
    'limp-opalescent': String,
    'limp-limpide': String,
    // Brillance
    'brillance-terne': String,
    'brillance-lumineuse': String,
    'brillance-eclatante': String,
    // Intensite
    'intens-pale': String,
    'intens-claire': String,
    'intens-soutenue': String,
    // Capillarite
    'capi-coulante': String,
    'capi-épaisse': String,
    'capi-grasse': String,
    'capi-visqueuse': String,
    // Couleurs
    'coul-vert': String,
    'coul-doré': String,
    'coul-paille': String,
    'coul-ambré': String,
    
    // =============== OLFACTIF ===============

    // 1er nez (avant aération)
    // 1ère impression
    'imp-douteuse': String,
    'imp-simple': String,
    'imp-franche': String,
    'imp-complexe': String,
    // Intensité aromatique
    'aro-faible': String,
    'aro-modérée': String,
    'aro-puissante': String,
    // Citez deux familles aromatiques
    'aro-firstnose-famille': String,
    // Citez trois arômes 
    'aro-firstnose-arome': String,
    // 2eme nez (après aération)
    // Citez deux familles aromatiques
    'aro-secondnose-famille': String,
    // Citez trois arômes
    'aro-secondnose-arome': String,

    // =============== GUSTATIF ===============
    
    // Attaque
    'att-faible': String,
    'att-ample': String,
    'att-franche': String,
    'att-puissante': String,
    // Acidité
    'acid-molle': String,
    'acid-fraiche': String,
    'acid-vive': String,
    'acid-nerveuse': String,
    // Moelleux (consistance-rondeur-alcool)
    'moel-sec': String,
    'moel-tendre': String,
    'moel-gras': String,
    'moel-capiteux': String,
    'moel-lourd': String,
    // Salé
    'sale-absent': String,
    'sale-iode': String,
    'sale-algal': String,
    // Arômes
    arome: String,
    // Finale
    'final-courte': String,
    'final-moyenne': String,
    'final-longue': String,
    'final-persistante': String,
   
    // =============== CONCLUSION ===============

    // Qualité
    'quali-faible': String,
    'quali-accept': String,
    'quali-bonne': String,
    'quali-excellente': String,
    // Moment
    'moment-aperitif': String,
    'moment-repas': String,
    'moment-digestif': String,
    // Association
    asso: String,
    // Prix public 
    'prix-trente': String,
    'prix-trente-cinquante': String,
    'prix-cinquante-soixantedix': String,
    'prix-soixantedix': String,
    // Note
    note: Number,
   

})



module.exports = mongoose.model('degustation', userSchema)
