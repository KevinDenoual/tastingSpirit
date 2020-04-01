// Import
const express = require('express')
const router = express.Router()
const multer = require('multer')

// Import controllers
const home = require('./controllers/home')
const decouvrir = require('./controllers/decouvrir')
const guide = require('./controllers/guide')
const rechercher = require('./controllers/rechercher')
const espacePerso = require('./controllers/profil/espacePerso')
const connexion = require('./controllers/connexion')
const forgotpassword = require('./controllers/forgotpassword')
const newpassword = require('./controllers/newpassword')
const deco = require('./controllers/deco')
const createCompte = require('./controllers/createCompte')
const admin = require('./controllers/admin/admin')
const message = require('./controllers/admin/message')
const createFiche = require('./controllers/admin/createFiche')
const userList = require('./controllers/admin/userList')
const verifMail = require ('./controllers/verifMail')

    //********* Multer ***********//
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname
        const date = Date.now()
        cb(null, ext, file.fieldname + '-' + date)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 4098 * 4098,
        files: 1
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/gif" ||
            file.mimetype === "image/jpeg"
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            cb(new Error('Le fichier doit être au format png, jpg, gif ou jpeg'))
        }
    }
})


    //********* Connexion ***********//
// Connexion
router.route('/connexion')
    .get(connexion.get)
    .post(connexion.postConnexion)
// Forgotpassword
router.route('/forgotpassword')
    .get(forgotpassword.get)
    .post(forgotpassword.post)
// Link New Password
router.route('/newpassword/:id')
    .get(forgotpassword.linkNewPassword)
// New Password
router.route('/newpassword')
    .get(newpassword.get)
    .post(newpassword.postNewPassword )
// Deconnexion
router.route('/deco')
    .get(deco.get)

    //********* Signup ***********//
// Creation de compte
router.route('/createCompte')
    .get(createCompte.get)
    .post(createCompte.postCreateCompte)
// Nodemailer verif 
router.route('/verify/:id')
    .get(createCompte.verifMail)
// VerifMail
router.route('/verifMail')
    .get(verifMail.get)

    //********* Homme page ***********//
    // Home
router.route('/')
.get(home.get)

// Decouvrir
router.route('/decouvrir')
    .get(decouvrir.get)

// Guide pratique
router.route('/guide')
    .get(guide.get)

// Rechercher
router.route('/rechercher')
    .get(rechercher.get)

    //********* EspacePerso***********//
// Profil
router.route('/espacePerso')
    .get(espacePerso.get)
    .post(espacePerso.post)
router.route('/espacePerso/:id')
    .delete(espacePerso.deleteOne)

    //********* Admin ***********//
// Admin
router.route('/admin')
    .get(admin.get)

// Message
router.route('/admin/message')
    .get(message.get)
    .post(message.post)
router.route('/admin/message/:id')
    .delete(message.delete)
// CreateFiche
router.route('/admin/createFiche')
    .get(createFiche.get)
    .post(upload.single('imgFiche'), createFiche.postFiche)


// UserList
router.route('/admin/userList')
    .get(userList.getListUser)
// UserList/:id
router.route('/admin/userList/:id')
    .delete(userList.deleteOne)
    .put(userList.modifStatus)

module.exports = router