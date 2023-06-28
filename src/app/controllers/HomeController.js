const Law = require('../models/Law')
const { multipleMongooseToObject } = require('../../util/mogoose')
const { mongooseToObject } = require('../../util/mogoose');
const User = require('../models/User');

class HomeController {
	//
	show(req, res, next) {
		Law.find({}).then((law) => {
			res.render('body/default', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});

		// 	// res.render('body/default',{layout: 'default-unlog.hbs'})
	}

	//
	// setting_profile(req, res) {
	// 	res.render('body/profile', { layout: 'home.hbs' });
	// }

	edit_profile(req, res) {
		User.findById(req.params.id).then((User) => {
			res.render('body/profile', {
				layout: 'home.hbs',
				user: mongooseToObject(User),
			});
		});
	}

	// Pagination
	newpara(req, res, next) {
		const resultsPerPage = 6;
		let page = req.params.page >= 1 ? req.params.page : 1;
		// const query = req.query.search;

		page = page - 1

		// Law.find({ name: query })
		// .select('name')
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
	};

	admin(req, res) {
		// const resultsPerPage = 6;
		// let page = req.params.page >= 1 ? req.params.page : 1;

		// page = page - 1;
		
		Law.find({})
			.sort({ updatedAt: 'desc' })
			// .limit(resultsPerPage)
			// .skip(resultsPerPage * page)
			.then((law) => {
				res.render('body/admin', {
					layout: 'home.hbs',
					law: multipleMongooseToObject(law),
				});
			})
			.catch((err) => {
				return res.status(500).send(err);
			});
	}

	//Thêm
	// [GET] /admin/add
	add(req, res) {
		res.render('body/add', { layout: 'home.hbs' });
	}
	// [POST] /admin/store
	store(req, res) {
		const law = new Law(req.body);
		setTimeout(() => {
			law.save();
			res.redirect('/home/admin/add');
		}, 1500);
	}

	//Sửa
	// [GET] /admin/:id/edit
	edit(req, res) {
		Law.findById(req.params.id)
			.then((law) => {
				res.render('body/edit', {
					layout: 'home.hbs',
					law: mongooseToObject(law),
				});
			});
	}

	// [PUT] /admin/edit/:id
	update(req, res) {
		Law.updateOne({ _id: req.params.id }, req.body)
			.then(() => {
				setTimeout(() => {
					res.redirect('/home/admin')
				}, 1500);
			})
	}

	//Xóa
	// [GET] /admin/delete/:id
	delete(req, res) {
		Law.deleteOne({ _id: req.params.id }, req.body).then(() =>
			res.redirect('/home/admin')
		);
	}

	results(req, res) {
		Law.find({ content: { $regex: req.query.noidung } }).then((law) => {
			res.render('body/search', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});
	}

	content(req,res){
        Law.findById(req.params.id)
			.then((law) => {
				res.render('body/content-unlog', {
                    layout: 'home.hbs',
					law: mongooseToObject(law),
				});
			});
    }
}

module.exports = new HomeController;