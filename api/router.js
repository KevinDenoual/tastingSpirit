// Import
const express = require('express')
const router = express.Router()

// Import controllers
const home = require('./controllers/home')
const decouvrir = require('./controllers/decouvrir')
const guide = require('./controllers/guide')
const profil = require('./controllers/profil/profil')
const admin = require('./controllers/admin/admin')

// Home
router.route('/')
    .get(home.get)

// Decouvrir
router.route('/decouvrir')
    .get(decouvrir.get)

// Guide pratique
router.route('/guide')
    .get(guide.get)

// Profil
router.route('/profil')
    .get(profil.get)

// Admin
router.route('/admin')
    .get(admin.get)

module.exports = router