const express = require('express');
const router = express.Router();
const {generateimg} =  require('../controllers/openai_controller')

router.post('/genimage', generateimg);

module.exports = router;