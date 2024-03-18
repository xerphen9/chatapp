const express = require('express');
const { addMessage } = require("../controllers/MessageControllers.js");

const router = express.Router()

router.post('/add', addMessage)

module.exports = router;