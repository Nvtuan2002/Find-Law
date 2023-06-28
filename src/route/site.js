var express = require('express'); 
const route = require('.');
const SiteController = require('../app/controllers/SiteController');
var router = express.Router();

var siteController = require('../app/controllers/SiteController')

router.get('/:id/noidung',siteController.content)
router.get('/:slug/dowload',siteController.download)

router.get('/ketqua', siteController.results)

router.get('/',siteController.index)

module.exports = router;