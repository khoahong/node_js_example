const
	config = require('../../configs'),
	mongoose = require('mongoose'),
	userModel = require('../models/user');

mongoose.connect(process.env.MONGODB_URI || config.connectionString);

module.exports = {
	User: userModel
};
