const express = require('express');
const {userVerification} = require('../middlewares/userMiddleware.js');
const { createUser, loginUser, logoutUser } = require('../controllers/UserControllers.js');

const router = express.Router()

router.get('/', userVerification)
router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

module.exports = router;