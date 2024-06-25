const express = require('express')
const router = express.Router()
const getAPI = require('./controller/getAPI')

router.get('/api',getAPI)

module.exports = router