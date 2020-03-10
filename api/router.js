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

// Creation de compte
router.route('/createCompte')
    .get(createCompte.get)

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
router.route('/profil/espacePerso')
    .get(espacePerso.get)

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
    .get(userList.get)

module.exports = router