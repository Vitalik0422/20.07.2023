const express = require('express')
const router = express.Router()

const localRouter = require('./local')

router.use('/local', localRouter)

module.exports = router