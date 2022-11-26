const express = require('express');
const { register ,getalluser ,loginUser} = require('../controllers/user');

const router = express.Router();

router.route('/').get(getalluser).post(register)
router.route('/login').post(loginUser)

module.exports = router