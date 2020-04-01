const degustModel = require('../../database/degustModel')

module.exports = {
    get:  async (req, res) => {
        const dbDegust = await degustModel.find(req.params.id)
        
        res.render('profil/espacePerso', { dbDegust } )
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
                
                else res.redirect('/espacePerso')
            }
        )
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

// // *********************** VISUEL ***********************
        // Limpidite
        // const trouble = req.body.trouble 
        // const flou = req.body.flou 
        // const opalescent = req.body.opalescent
        // const limpide = req.body.limpide 
        // const limpidite = {
        //     trouble: trouble,
        //     flou: flou, 
        //     opalescent: opalescent, 
        //     limpide: limpide
        // }

        // // Brillance
        // const terne = req.body.terne
        // const lumineuse = req.body.lumineuse
        // const eclatante = req.body.eclatante
        // const brillance = {
        //     terne: terne, 
        //     lumineuse: lumineuse, 
        //     eclatante: eclatante
        // }

        // // Intensite
        // const pale = req.body.pale
        // const claire = req.body.claire
        // const soutenue = req.body.soutenue
        // const intensite = {
        //     pale: pale,
        //     claire: claire,
        //     soutenue: soutenue
        //   }
        
        // // Capillarite
        // const coulante = req.body.coulante
        // const epaisse = req.body.epaisse
        // const grasse = req.body.grasse
        // const visqueuse = req.body.visqueuse
        // const capillarite = {
        //     coulante: coulante,
        //     epaisse: epaisse,
        //     grasse: grasse,
        //     visqueuse: visqueuse
        //   }

        // // Couleur
        // const vert = req.body.vert
        // const dore = req.body.dore
        // const paille = req.body.paille
        // const ambre = req.body.ambre
        // const couleur = {
        //     vert: vert,
        //     dore: dore,
        //     paille: paille,
        //     ambre: ambre
        //   }

        // const visuel = {
        //     limpidite: limpidite,
        //     brillance: brillance,
        //     intensite: intensite,
        //     capillarite: capillarite,
        //     couleur: couleur
        //   }
        // console.log(visuel);
    // // *********************** OLFACTIF ***********************
    //     // 1er nez
    //     const douteuse = (req.body.douteuse == 'true' || false)
    //     const simple = (req.body.simple == 'true' || false)
    //     const franche = (req.body.franche == 'true' || false)
    //     const complexe = (req.body.complexe == 'true' || false)
    //     const faible = (req.body.faible == 'true' || false)
    //     const moderee = (req.body.moderee == 'true' || false)
    //     const puissante = (req.body.puissante == 'true' || false)
    //     const textfamille = req.body.textfamille
    //     const textaromes = req.body.textaromes 
    //     const firstnose = {
    //         douteuse: douteuse,
    //         simple: simple,
    //         franche: franche,
    //         complexe: complexe,
    //         faible: faible,
    //         moderee: moderee,
    //         puissante: puissante,
    //         textfamille: textfamille,
    //         textaromes: textaromes,
    //       }

    //     // 2eme nez
    //     const textfamillebis = req.body.textfamillebis
    //     const textaromesbis = req.body.textaromesbis
    //     const secondnose = {
    //         extfamillebis: textfamillebis,
    //         textaromesbis: textaromesbis
    //       }

    //     const olfactif = {
    //         firstnose: firstnose,
    //         secondnose: secondnose 
    //       }
    //     //   console.log(olfactif);
    // // *********************** GUSTATIF ***********************
    //     // Attaque
    //     const attfaible = (req.body.attfaible == 'true' || false)
    //     const ample = (req.body.ample == 'true' || false)
    //     const attfranche = (req.body.attfranche == 'true' || false)
    //     const attpuissante = (req.body.attpuissante == 'true' || false)
    //     const attaque = {
    //         attfaible: attfaible,
    //         ample: ample,
    //         attfranche: attfranche,
    //         attpuissante: attpuissante
    //       }

    //      // Acidite
    //      const molle = (req.body.molle == 'true' || false)
    //      const fraiche = (req.body.fraiche == 'true' || false)
    //      const vive = (req.body.vive == 'true' || false)
    //      const nerveuse = (req.body.nerveuse == 'true' || false)
    //      const acidite = {
    //         molle: molle,
    //         fraiche: fraiche,
    //         vive: vive,
    //         nerveuse: nerveuse
    //        }

    //     // moelleux
    //     const sec = (req.body.sec == 'true' || false)
    //     const tendre = (req.body.tendre == 'true' || false)
    //     const gras = (req.body.gras == 'true' || false)
    //     const capiteux = (req.body.capiteux == 'true' || false)
    //     const lourd = (req.body.lourd == 'true' || false)
    //     const moelleux = {
    //         sec: sec,
    //         tendre: tendre,
    //         gras: gras,
    //         capiteux: capiteux,
    //         lourd: lourd
    //       }

    //     // Sale
    //     const absent = (req.body.absent == 'true' || false)
    //     const iode = (req.body.iode == 'true' || false)
    //     const algal = (req.body.algal == 'true' || false)
    //     const sale = {
    //         absent: absent,
    //         iode: iode,
    //         algal: algal
    //       }

    //     // Aromes
    //     const textarometerce = req.body.textarometerce
    //     const arome = {
    //         textarometerce: textarometerce
    //     }
        
    //     // Finale
    //     const courte = (req.body.courte == 'true' || false)
    //     const moyenne = (req.body.moyenne == 'true' || false)
    //     const longue = (req.body.longue == 'true' || false)
    //     const persistante = (req.body.persistante == 'true' || false)
    //     const finale = {
    //         courte: courte,
    //         moyenne: moyenne,
    //         longue: longue,
    //         persistante: persistante
    //        }

    //     const gustatif = {
    //         attaque: attaque,
    //         acidite: acidite,
    //         moelleux: moelleux,
    //         sale: sale,
    //         arome: arome,
    //         finale: finale
    //       }
    //     //   console.log(gustatif);
          
    // // *********************** CONCLUSION ***********************
    //     // Qualite
    //     const qltfaible = (req.body.qltfaible == 'true' || false)
    //     const acceptable = (req.body.acceptable == 'true' || false)
    //     const bonne = (req.body.bonne == 'true' || false)
    //     const excellente = (req.body.excellente == 'true' || false)
    //     const qualite = {
    //         qltfaible: qltfaible,
    //         acceptable: acceptable,
    //         bonne: bonne,
    //         excellente: excellente
    //        }

    //     // moment
    //     const aperitif = (req.body.aperitif == 'true' || false)
    //     const repas = (req.body.repas == 'true' || false)
    //     const digestif = (req.body.digestif == 'true' || false)
    //     const moment = {
    //         aperitif: aperitif,
    //         repas: repas,
    //         digestif: digestif,
    //        }

    //     // Aromes
    //     const textassociation = req.body.textassociation
    //     const association = {
    //         textassociation: textassociation
    //     }

    //     // Prix
    //     const inftrente = (req.body.inftrente == 'true' || false)
    //     const trentecinquante = (req.body.trentecinquante == 'true' || false)
    //     const cinquantesoixantedix = (req.body.cinquantesoixantedix == 'true' || false)
    //     const soixantedixplus = (req.body.soixantedixplus == 'true' || false)
    //     const prix = {
    //         inftrente: inftrente,
    //         trentecinquante: trentecinquante,
    //         cinquantesoixantedix: cinquantesoixantedix,
    //         soixantedixplus: soixantedixplus
    //        }

    //     // Note
    //     const valeurnote = req.body.valeurnote
    //     const note = {
    //         valeurnote: valeurnote
    //     }

    //     const conclusion = {
    //         qualite: qualite,
    //         moment: moment,
    //         association: association,
    //         prix: prix,
    //         note: note
    //       }