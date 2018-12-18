const 
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	schema = new Schema({
		username: { type: String, unique: true, required: true },
		hash: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		createdDate: { type: Date, default: Date.now }
	});

schema.set('toJson', { virtuals: true });

module.exports = mongoose.model('User', schema);
