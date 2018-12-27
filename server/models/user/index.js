const 
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	prohibitUpdateFields = 'username hash createdDate updatedDate',
	uniqueFields = 'username email',
	schema = new Schema({
		username: { type: String, unique: true, required: true },
		email: {type: String, unique: true, required: true, default: ''},
		hash: { type: String, required: true, select: false },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		createdDate: { type: Date, default: Date.now },
		updatedDate: { type: Date, default: Date.now },
		newValue: { type: String, default: 'haha' }
	});

schema.set('toJson', { virtuals: true });

schema.pre('save', function(next) {
	if(!this.isNew && this.isModified(prohibitUpdateFields)) {
		return next(new Error('Trying to modify restricted data'));
	}

	this.updatedDate = Date.now;
	next();
});

module.exports = mongoose.model('User', schema);
