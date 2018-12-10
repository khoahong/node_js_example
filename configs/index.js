const 
	env = process.env.NODE_ENV || 'local';
	envConfig = require('./' + env);

module.exports = envConfig;