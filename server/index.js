'use strict';

const
	express = require('express'),
	expressHandlebars = require('express-handlebars'),
	mongoClient = require('mongodb').MongoClient,
	bodyParser = require('body-parser');

module.exports = function() {
	let
		server = express(),
		create,
		start;

	create = function(config) {
		let routes = require('./routes');

		server.set('env', config.env);
		server.set('hostname', config.hostname);
		server.set('port', config.port);
		server.set('viewDir', config.viewDir);

		server.engine('.hbs', expressHandlebars({
            defaultLayout: 'default',
            layoutsDir: config.viewDir + '/layouts',
            extname: '.hbs'
        }));
        server.set('views', server.get('viewDir'));
        server.set('view engine', '.hbs');

		server.use(bodyParser.json());

		routes.init(server);
	};

	start = function() {
		let
			hostname = server.get('hostname'),
			port = server.get('port');

		server.listen(port, function() {
			console.log('Server is listening on ' + hostname + ':' + port);
		});
	}

	return {
		create: create,
		start: start
	};
};
