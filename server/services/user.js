const 
	bcrypt = require('bcryptjs'),
	db = require('../db'),
	User = db.User;

module.exports = {
	create,
	getAll,
	getById,
	update
};

async function create(userParams) {
	let is_existing = await User.findOne({username: userParams.username});
	if (is_existing) {
		throw new Error('Username ' + userParams.username + ' is already taken.');
	}

	const user = new User(userParams);

    if (userParams.password) {
        user.hash = bcrypt.hashSync(userParams.password, 10);
    }

	await user.save();
}

async function getAll() {
	return await User.find().select();
}

async function getById(id) {
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		return await User.findById(id).select();	
	} else	{
		return null;
	}	
}

async function update(id, userParams) {
	let user = await getById(id);

	if (!user) {
		throw new Error('User not found');
	}

	if (user.email != userParams.email && await User.findOne({email: userParams.email})) {
		throw new Error('Email ' + userParams.email + ' is already registed with another user.');
	}

	user.set(userParams);
	await user.save();
}
