const {addBookmark,removeBookmark,getUserBookmarks} = require('../controllers/bookmarks')


const express = require('express')
const router = express.Router()

router.route('/:id').post(addBookmark).delete(removeBookmark).get(getUserBookmarks)



module.exports = router