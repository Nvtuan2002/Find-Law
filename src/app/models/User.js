const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
	name: { type: String },
	email: { type: String, },
	password: { type: String,},
	repassword: { type: String },
	address: { type: String },
	phone: { type: String },
});

module.exports = mongoose.model('user', User)