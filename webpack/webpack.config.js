const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: [path.resolve(__dirname, './../src/html/App')]
	},
	output: {
		path: path.resolve(__dirname, './../public/dist'),
		filename: 'bundle.js'
	},
	module: {},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: false
		})
	]
};
