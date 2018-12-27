const
	express = require('express'),
	router = express.Router(),
	userService = require('../services/user');

// router.post('/register', register);
// router.get('/', getAll);

module.exports = {
	register,
	getAll,
	getById,
	update
};

function register(req, res, next) {
	console.log(req.body);
	userService.create(req.body)
	   .then(() => res.json({message: 'Create user successfully.'}))
	   .catch(err => next(err));
}

function getAll(req, res, next) {
	userService.getAll(req.body)
		.then(users => res.json(users))
		.catch(err => next(err));
}

function getById(req, res, next) {
	userService.getById(req.params.id)
		.then(user => user ? res.json(user) : res.sendStatus(404))
		.catch(err => next(err));
}

function update(req, res, next) {
	userService.update(req.params.id, req.body)
		.then(user => res.json({message: 'Update user successfully.'}))
		.catch(err => next(err));
}
