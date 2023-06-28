const Law = require('../models/Law');
const { multipleMongooseToObject } = require('../../util/mogoose');
class NewparaController {
	// NEW para
	// show(req, res) {
	// 	Law.find({}).then((law) => {
	// 		res.render('body/newpara', {
	// 			layout: 'default-unlog.hbs',
	// 			law: multipleMongooseToObject(law),
	// 		});
	// 	});
	// }
	newpara(req, res){
		const resultsPerPage = 6;
		let page = req.params.page >= 1 ? req.params.page : 1;

		page = page - 1;

		Law.find({})
			.sort({ updatedAt: 'desc' })
			.limit(resultsPerPage)
			.skip(resultsPerPage * page)
			.then((law) => {
				res.render('body/newpara', {
					layout: 'home.hbs',
					law: multipleMongooseToObject(law),
				});
			})
			.catch((err) => {
				return res.status(500).send(err);
			});
	}

	newpara1(req, res){
		const resultsPerPage = 6;
		let page = req.params.page >= 1 ? req.params.page : 1;

		page = page - 1;

		Law.find({})
			.sort({ updatedAt: 'desc' })
			.limit(resultsPerPage)
			.skip(resultsPerPage * page)
			.then((law) => {
				res.render('body/newpara-unlog', {
					layout: 'default-unlog.hbs',
					law: multipleMongooseToObject(law),
				});
			})
			.catch((err) => {
				return res.status(500).send(err);
			});
	}
}

module.exports = new NewparaController();
