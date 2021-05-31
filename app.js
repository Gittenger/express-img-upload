const express = require('express')
const multer = require('multer')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

module.exports = app
