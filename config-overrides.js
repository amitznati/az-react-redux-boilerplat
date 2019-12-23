const PATH = require('path');
module.exports = (config, env) => {
	config.resolve.alias = {
		sdk: PATH.resolve(__dirname, 'src/sdk'),
		['visible-to-do-list']: PATH.resolve(__dirname, 'src/widgets/visible-to-do-list'),
	};
	return config;
};
