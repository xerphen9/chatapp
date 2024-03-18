const express = require('express');
const middleware = require('../middleware.js');
const { createUser, loginUser, logoutUser } = require('../controllers/UserControllers.js');

const router = express.Router()
const _middleware = middleware()

router.post('/signup', createUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

module.exports = router;