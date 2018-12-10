'use strict';

function index(req, res) {
	res.render('home/index', {
		title: 'Home heell'
	});
};

module.exports = {
	index: index
};

