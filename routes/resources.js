const express = require('express')
const router = express.Router()
const {addResource,updateResource,getAllResource} = require('../controllers/resources')

router.route('/').get(getAllResource).post(addResource)
router.route('/:id').post(updateResource)

module.exports=router