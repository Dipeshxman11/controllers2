
const express = require('express');

const router = express.Router();

const contactController = require('./controllers/contact'); 

router.get('/', contactController.contactUscontroller); 
router.post('/submit', contactController.contactpostUscontroller); 

module.exports = router;
