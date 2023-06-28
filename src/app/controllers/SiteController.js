const Law = require('../models/Law')
var path = require('path');
const { multipleMongooseToObject } = require('../../util/mogoose')
const { mongooseToObject } = require('../../util/mogoose');

class SiteController {

    // 
    index(req, res) {

        Law.find({})
            .then(law => {
                res.render('body/default-unlog',
                    {
                        layout: 'default-unlog.hbs',
                        law: multipleMongooseToObject(law)
                    })
            })

        // res.render('body/default',{layout: 'default-unlog.hbs'})
    }

    results(req, res) {
        Law.find({
            $or: [
                { content: {$regex: req.query.noidung}},
             ]
    })
            .then(law => {
                res.render('body/search-unlog',
                    {
                        layout: 'default-unlog.hbs',
                        law: multipleMongooseToObject(law)
                    })
            })
    }

    content(req,res){
        Law.findById(req.params.id)
			.then((law) => {
				res.render('body/content-unlog', {
                    layout: 'default-unlog.hbs',
					law: mongooseToObject(law),
				});
			});
    }

    download(req,res){
        const a = [req.params.slug, 'pdf'];
        const b = a.join('.');
        // res.download(path.join('/Workspace/dacs/src/public/file/', b));
        res.download(path.join('./src/public/file',b));
        
    }
}

module.exports = new SiteController;