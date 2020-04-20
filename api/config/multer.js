const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const path = require('path')



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

module.exports = upload
    