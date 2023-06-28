var express = require('express'); 
var router = express.Router();

var newparaController = require('../app/controllers/NewparaController')

router.use('/:page', newparaController.newpara1);
router.use('/home/:page',newparaController.newpara)
// router.use('/',newparaController.show);

module.exports = router;