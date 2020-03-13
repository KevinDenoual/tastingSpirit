// Import
const express = require('express')
const router = express.Router()

// Import controllers
const home = require('./controllers/home')
const decouvrir = require('./controllers/decouvrir')
const guide = require('./controllers/guide')
const rechercher = require('./controllers/rechercher')
const espacePerso = require('./controllers/profil/espacePerso')
const connexion = require('./controllers/connexion')
const deco = require('./controllers/deco')
const createCompte = require('./controllers/createCompte')
const admin = require('./controllers/admin/admin')
const message = require('./controllers/admin/message')
const createFiche = require('./controllers/admin/createFiche')
const userList = require('./controllers/admin/userList')

// Home
router.route('/')
    .get(home.get)

// Connexion
router.route('/connexion')
    .get(connexion.get)
    .post(connexion.postConnexion)

// Deconnexion
router.route('/deco')
    .get(deco.get)

// Creation de compte
router.route('/createCompte')
    .get(createCompte.get)
    .post(createCompte.postCreateCompte)

// Decouvrir
router.route('/decouvrir')
    .get(decouvrir.get)

// Guide pratique
router.route('/guide')
    .get(guide.get)

// Rechercher
router.route('/rechercher')
    .get(rechercher.get)

// Profil
router.route('/espacePerso')
    .get(espacePerso.get)
    .post(espacePerso.post)

    // Admin
router.route('/admin')
    .get(admin.get)

// Message
router.route('/admin/message')
    .get(message.get)

// CreateFiche
router.route('/admin/createFiche')
    .get(createFiche.get)

// UserList
router.route('/admin/userList')
    .get(userList.getListUser)
// UserList/:id
router.route('/admin/userList/:id')
    .delete(userList.deleteOne)
    .put(userList.putListUser)

module.exports = router