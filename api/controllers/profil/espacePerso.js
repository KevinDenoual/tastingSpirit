const degustModel = require('../../database/degustModel')

module.exports = {
    get:  async (req, res) => {
        const dbDegust = await degustModel.find(req.params.id)
        
        res.render('profil/espacePerso', { dbDegust } )
        // console.log(dbDegust);
        
    },

    post: (req, res) => {
        // console.log(req.body);

    // *********************** VISUEL ***********************
        // Limpidite
        const trouble = (req.body.trouble == 'true' || false)
        const flou = (req.body.flou == 'true' || false)
        const opalescent = (req.body.opalescent == 'true' || false)
        const limpide = (req.body.limpide == 'true' || false)
        const limpidite = {
            trouble: trouble,
            flou: flou, 
            opalescent: opalescent, 
            limpide: limpide
        }

        // Brillance
        const terne = (req.body.terne == 'true' || false)
        const lumineuse = (req.body.lumineuse == 'true' || false)
        const eclatante = (req.body.eclatante == 'true' || false)
        const brillance = {
            terne: terne, 
            lumineuse: lumineuse, 
            eclatante: eclatante
        }

        // Intensite
        const pale = (req.body.pale == 'true' || false)
        const claire = (req.body.claire == 'true' || false)
        const soutenue = (req.body.soutenue == 'true' || false)
        const intensite = {
            pale: pale,
            claire: claire,
            soutenue: soutenue
          }
        
        // Capillarite
        const coulante = (req.body.coulante == 'true' || false)
        const epaisse = (req.body.epaisse == 'true' || false)
        const grasse = (req.body.grasse == 'true' || false)
        const visqueuse = (req.body.visqueuse == 'true' || false)
        const capillarite = {
            coulante: coulante,
            epaisse: epaisse,
            grasse: grasse,
            visqueuse: visqueuse
          }

        // Couleur
        const vert = (req.body.vert == 'true' || false)
        const dore = (req.body.dore == 'true' || false)
        const paille = (req.body.paille == 'true' || false)
        const ambre = (req.body.ambre == 'true' || false)
        const couleur = {
            vert: vert,
            dore: dore,
            paille: paille,
            ambre: ambre
          }

        const visuel = {
            limpidite: limpidite,
            brillance: brillance,
            intensite: intensite,
            capillarite: capillarite,
            couleur: couleur
          }
        
        console.log(visuel);
        
        degustModel.create(
            {
                ...req.body,
                visuel: visuel
            },
            (err) => {
                res.redirect('/espacePerso')
            }
        )
    }

}