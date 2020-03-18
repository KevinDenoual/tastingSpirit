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
        // console.log(visuel);
    // *********************** OLFACTIF ***********************
        // 1er nez
        const douteuse = (req.body.douteuse == 'true' || false)
        const simple = (req.body.simple == 'true' || false)
        const franche = (req.body.franche == 'true' || false)
        const complexe = (req.body.complexe == 'true' || false)
        const faible = (req.body.faible == 'true' || false)
        const moderee = (req.body.moderee == 'true' || false)
        const puissante = (req.body.puissante == 'true' || false)
        const textfamille = req.body.textfamille
        const textaromes = req.body.textaromes 
        const firstnose = {
            douteuse: douteuse,
            simple: simple,
            franche: franche,
            complexe: complexe,
            faible: faible,
            moderee: moderee,
            puissante: puissante,
            textfamille: textfamille,
            textaromes: textaromes,
          }

        // 2eme nez
        const textfamillebis = req.body.textfamillebis
        const textaromesbis = req.body.textaromesbis
        const secondnose = {
            extfamillebis: textfamillebis,
            textaromesbis: textaromesbis
          }

        const olfactif = {
            firstnose: firstnose,
            secondnose: secondnose 
          }
        //   console.log(olfactif);
    // *********************** GUSTATIF ***********************
        // Attaque
        const attfaible = (req.body.attfaible == 'true' || false)
        const ample = (req.body.ample == 'true' || false)
        const attfranche = (req.body.attfranche == 'true' || false)
        const attpuissante = (req.body.attpuissante == 'true' || false)
        const attaque = {
            attfaible: attfaible,
            ample: ample,
            attfranche: attfranche,
            attpuissante: attpuissante
          }

         // Acidite
         const molle = (req.body.molle == 'true' || false)
         const fraiche = (req.body.fraiche == 'true' || false)
         const vive = (req.body.vive == 'true' || false)
         const nerveuse = (req.body.nerveuse == 'true' || false)
         const acidite = {
            molle: molle,
            fraiche: fraiche,
            vive: vive,
            nerveuse: nerveuse
           }

        // moelleux
        const sec = (req.body.sec == 'true' || false)
        const tendre = (req.body.tendre == 'true' || false)
        const gras = (req.body.gras == 'true' || false)
        const capiteux = (req.body.capiteux == 'true' || false)
        const lourd = (req.body.lourd == 'true' || false)
        const moelleux = {
            sec: sec,
            tendre: tendre,
            gras: gras,
            capiteux: capiteux,
            lourd: lourd
          }

        // Sale
        const absent = (req.body.absent == 'true' || false)
        const iode = (req.body.iode == 'true' || false)
        const algal = (req.body.algal == 'true' || false)
        const sale = {
            absent: absent,
            iode: iode,
            algal: algal
          }

        // Aromes
        const textarometerce = req.body.textarometerce
        const arome = {
            textarometerce: textarometerce
        }
        
        // Finale
        const courte = (req.body.courte == 'true' || false)
        const moyenne = (req.body.moyenne == 'true' || false)
        const longue = (req.body.longue == 'true' || false)
        const persistante = (req.body.persistante == 'true' || false)
        const finale = {
            courte: courte,
            moyenne: moyenne,
            longue: longue,
            persistante: persistante
           }

        const gustatif = {
            attaque: attaque,
            acidite: acidite,
            moelleux: moelleux,
            sale: sale,
            arome: arome,
            finale: finale
          }
          console.log(gustatif);
          
    // *********************** CONCLUSION ***********************
        // Qualite
        const qltfaible = (req.body.qltfaible == 'true' || false)
        const acceptable = (req.body.acceptable == 'true' || false)
        const bonne = (req.body.bonne == 'true' || false)
        const excellente = (req.body.excellente == 'true' || false)
        const qualite = {
            qltfaible: qltfaible,
            acceptable: acceptable,
            bonne: bonne,
            excellente: excellente
           }

        // moment
        const aperitif = (req.body.aperitif == 'true' || false)
        const repas = (req.body.repas == 'true' || false)
        const digestif = (req.body.digestif == 'true' || false)
        const moment = {
            aperitif: aperitif,
            repas: repas,
            digestif: digestif,
           }

        // Aromes
        const textassociation = req.body.textassociation
        const association = {
            textassociation: textassociation
        }

        // Prix
        const inftrente = (req.body.inftrente == 'true' || false)
        const trentecinquante = (req.body.trentecinquante == 'true' || false)
        const cinquantesoixantedix = (req.body.cinquantesoixantedix == 'true' || false)
        const soixantedixplus = (req.body.soixantedixplus == 'true' || false)
        const prix = {
            inftrente: inftrente,
            trentecinquante: trentecinquante,
            cinquantesoixantedix: cinquantesoixantedix,
            soixantedixplus: soixantedixplus
           }

        // Note
        const valeurnote = req.body.valeurnote
        const note = {
            valeurnote: valeurnote
        }

        const conclusion = {
            qualite: qualite,
            moment: moment,
            association: association,
            prix: prix,
            note: note
          }

        console.log(conclusion);
        
        degustModel.create(
            {
                visuel: visuel,
                olfactif: olfactif,
                gustatif: gustatif,
                conclusion: conclusion
            },
            (err) => {
                res.redirect('/espacePerso')
            }
        )
    }

}