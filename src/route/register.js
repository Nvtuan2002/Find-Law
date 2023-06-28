var express = require('express'); 
const route = require('.');
var router = express.Router();

var registerController = require('../app/controllers/RegisterController')

router.post('/store', registerController.store);


router.get('/', registerController.register);

module.exports = router;