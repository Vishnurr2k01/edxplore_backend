const { initaluserData,resourceTable } = require('../controllers/initial')

const express = require('express')
const router = express.Router()

router.route('/').get(initaluserData)
router.route('/resources').get(resourceTable)

module.exports = router