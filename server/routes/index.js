const
	homeRoute = require('./home'),
	userRouter = require('./user'),
	errorHandler = require('../utils/errorHandler');

function init(server) {
	server.get('*', function(req, res, next) {
		console.log('Response was made to: ' + req.originalUrl);
		return next();
	});

	server.get('/', function(req, res) {
		res.redirect('/home');
	});

	server.use('/home', homeRoute);
	server.use('/users', userRouter);
	
	server.use(errorHandler);
};

module.exports = {
	init: init
};
