const express = require('express')
const uploadController = require('./uploadController')

const router = express.Router()

const { updateImageDB, uploadPhoto } = uploadController

router.post('/upload', uploadPhoto, updateImageDB)

module.exports = router
