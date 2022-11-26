const {userTable,resourceTable,bookmarkTable } = require('../controllers/initial')

const express = require('express')
const router = express.Router()

router.route('/').get(userTable)
router.route('/resources').get(resourceTable)
router.route('/bookmarks').get(bookmarkTable)

module.exports = router