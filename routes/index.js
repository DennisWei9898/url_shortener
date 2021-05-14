// import modules
const express = require('express')
const router = express.Router()

// import shortener.js

const shortener = require('./modules/shortener')
const home = require('./modules/home')

router.use('/', home)
router.use('/', shortener)

module.exports = router
