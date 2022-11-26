const express = require('express')
const router = express.Router()
const { addResource, updateResource, 
    getAllResource, getUserResources,
    deleteResource } = require('../controllers/resources')

router.route('/').get(getAllResource).post(addResource)
router.route('/:id').post(updateResource).delete(deleteResource)
router.route('/user/:id').get(getUserResources)

module.exports = router