// Import
const express = require('express')
const router = express.Router()
const path = require('path')
const { check, validationResult } = require('express-validator')


// ************** Import controllers ************** 
// HOME
const home = require('./controllers/home')
const decouvrir = require('./controllers/decouvrir')
const guide = require('./controllers/guide')
const rechercher = require('./controllers/rechercher')
// EspacePerso
const espacePerso = require('./controllers/profil/espacePerso')
// Auth
const connexion = require('./controllers/auth/connexion')
const deco = require('./controllers/auth/deco')
const forgotpassword = require('./controllers/auth/forgotpassword')
const newpassword = require('./controllers/auth/newpassword')
const googleAuth = require('./controllers/auth/googleAuth')
// Create Compte
const createCompte = require('./controllers/createCompte',)
const verifMail = require ('./controllers/verifMail')
//  ADMIN
const admin = require('./controllers/admin/admin')
const message = require('./controllers/admin/message')
const userList = require('./controllers/admin/userList')
const Fiche = require('./controllers/admin/Fiche')
const multer = require('./config/multer')
const robot = require('./controllers/robot')
// RGPD
const rgpd = require('./controllers/cookie')


// ************** Import middleware ************** 
const auth = require('./middleware/auth')
const isAdmin = require('./middleware/isAdmin')
const isVerified = require('./middleware/isVerified')


// ************** Robot.txt + sitemap ************** 
router.route('/robots.txt')
    .get(robot.robot)
router.route('/sitemap.xml')
    .get(robot.sitemap)


// ************** Auth **************   
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
    .get(auth, deco.get)
// Google Auth
router.use('/connexion/google', googleAuth)


// ************** Create Compte ************** 
// Creation de compte
router.route('/createCompte')
    .get(createCompte.get)
    .post([
        check('email').not().isEmpty().normalizeEmail().withMessage('email nécessaire'),
        check('firstname').not().isEmpty().trim().escape().isAlpha().withMessage('prénom'),
        check('lastname').not().isEmpty().trim().escape().withMessage('nom'),
        check('password').not().isEmpty().matches().isLength({min: 5}).withMessage('mot de passe : 5 caractères minimum')
    ],createCompte.postCreateCompte)
// Nodemailer verif 
router.route('/verify/:id')
    .get(createCompte.verifMail)
// VerifMail
router.route('/verifMail')
    .get(verifMail.get)

// ************** HOME page ************** 
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

// ************** EspacePerso ************** 
// Profil
router.route('/espacePerso')
    .get(auth, isVerified, espacePerso.get)
    .post(espacePerso.post)
router.route('/espacePerso/:id')
    .delete(espacePerso.deleteOne)

// ************** ADMIN ************** 
// Admin
router.route('/admin')
    .get(isAdmin, admin.get)
// Message
router.route('/admin/message')
    .get(isAdmin, message.get)
    .post(message.post)
router.route('/admin/message/:id')
    .delete(message.delete)
// Fiche
router.route('/admin/createFiche')
    .get(isAdmin, Fiche.get)
    .post(multer.single('imgFiche'), Fiche.postFiche)
// Fiche/:id
router.route('/admin/fiche/:id')
    .delete(Fiche.deleteFiche)
    .put(multer.single('imgFiche'), Fiche.putFiche)
// UserList
router.route('/admin/userList')
    .get(isAdmin, userList.getListUser)
// UserList/:id
router.route('/admin/userList/:id')
    .delete(userList.deleteOne)
    .put(userList.modifStatus)

    // ************** RGPD ************** 
router.route('/rgpd')
    .post(rgpd.post)


module.exports = router