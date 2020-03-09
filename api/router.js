// Import
const express = require('express')
const router = express.Router()

// Import controllers
const home = require('./controllers/home')
const decouvrir = require('./controllers/decouvrir')
const guide = require('./controllers/guide')
const rechercher = require('./controllers/rechercher')
const espacePerso = require('./controllers/profil/espacePerso')
const admin = require('./controllers/admin/admin')
const connexion = require('./controllers/connexion')
const createCompte = require('./controllers/createCompte')

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

module.exports = router