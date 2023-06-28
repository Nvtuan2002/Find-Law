var express = require('express'); 
const route = require('.');
const LoginController = require('../app/controllers/LoginController');
var router = express.Router();


router.get('/check',LoginController.check)

router.get('/',LoginController.dangnhap)


module.exports = router;