const degustModel = require('../../database/degustModel')
const userCollection = require('../../database/userModel');

const swal = require('sweetalert')

module.exports = {
    get:  async (req, res) => {
        const dbDegust = await degustModel.find(req.params.id)
        const dbUserId = await userCollection.findById(req.session.userId)
        var  accept = ""
                if(req.cookies.CookieAccept){
                accept = "true"
                }
        
        res.render('profil/espacePerso', { dbDegust, dbUserId, accept } )
        // console.log(dbDegust);
        
    },

    post: (req, res) => {
        // console.log(req.body);
    // *********************** HEAD ***********************
        const whiskyName = req.body.whiskyName
        const lieu = req.body.lieu
        const origine = req.body.origine
        const date = req.body.date
        const head = {
            whiskyName: whiskyName,
            lieu: lieu,
            origine: origine,
            date: date
        }

    // *********************** VISUEL ***********************
          const limpidite = req.body.limpidite
          const brillance = req.body.brillance
          const intensite = req.body.intensite
          const capillarite = req.body.capillarite
          const couleur = req.body.couleur

          const visuel = {
            limpidite: limpidite,
            brillance: brillance,
            intensite: intensite,
            capillarite: capillarite,
            couleur: couleur
          }

    // *********************** OLFACTIF ***********************
          const franchise = req.body.franchise
          const intensiteOl = req.body.intensiteOl
          const textfamille = req.body.textfamille
          const textaromes = req.body.textaromes
          const textfamillebis = req.body.textfamillebis
          const textaromesbis = req.body.textaromesbis

          const olfactif = {
            franchise: franchise,
            intensiteOl: intensiteOl,
            textfamille: textfamille,
            textaromes: textaromes,
            textfamillebis: textfamillebis,
            textaromesbis: textaromesbis
          }

    // *********************** GUSTATIF ***********************
            const attaque = req.body.attaque
            const acidite = req.body.acidite
            const moelleux = req.body.moelleux
            const sale = req.body.sale
            const arome = req.body.arome
            const finale = req.body.finale

            const gustatif = {
                attaque: attaque,
                acidite:acidite,
                moelleux: moelleux,
                sale: sale,
                arome: arome,
                finale: finale
            }

    // *********************** CONCLUSION ***********************
            const qualite = req.body.qualite
            const moment = req.body.moment
            const association = req.body.association
            const prix = req.body.prix
            const note = req.body.note

            const conclusion = {
                qualite: qualite,
                moment: moment, 
                association: association,
                prix: prix,
                note: note
            }
    
        console.log(req.body);
        
        degustModel.create(
            {
                head: head,
                visuel: visuel,
                olfactif: olfactif,
                gustatif: gustatif,
                conclusion: conclusion
            },
            (err) => { 
                if (err) console.log(err)
                
                else {
                
                    res.redirect('/espacePerso')
                }
            }
        )
        swal("Good job!", "You clicked the button!", "success");

    },

    deleteOne: (req, res) => {
        const query = { _id: req.params.id }
        
        degustModel.deleteOne(query,
            (err) => {
                
                if (!err) {
                    res.redirect('/espacePerso')
                } else {
                    res.render(err)
                }
            })
    },

}

