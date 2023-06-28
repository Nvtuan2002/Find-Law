const User = require('../models/User');

class RegisterController {
	//
	register(req, res) {
		res.render('body/register', { layout: 'log.hbs' });
	}

    //
	store(req, res) {
		const user = new User(req.body);
		user.save();
		setTimeout(function () {
			res.redirect('/login');	
		},1500)  
	}
}

module.exports = new RegisterController();
