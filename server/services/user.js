const 
	bcrypt = require('bcryptjs'),
	db = require('../db'),
	User = db.User;

module.exports = {
	create,
	getAll,
	getById
};

async function create(userParams) {
	let is_existing = await User.findOne({username: userParams.username});
	if (is_existing) {
		throw 'Username ' + userParams.username + ' is already taken';
	}

	const user = new User(userParams);

    if (userParams.password) {
        user.hash = bcrypt.hashSync(userParams.password, 10);
    }

	await user.save();
}

async function getAll() {
	return await User.find().select('-hash');
}

async function getById(id) {
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		return await User.findById(id).select('-hash');	
	} else	{
		return null;
	}	
}

async function update(id, userParams) {
	let user = getById(id);
	
}