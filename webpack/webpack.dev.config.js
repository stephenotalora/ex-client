const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: [
			'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
			'webpack/hot/only-dev-server',
			path.resolve(__dirname, '../src/html/app')
		]
	},
	output: {
		path: path.resolve(__dirname, './../public/static/'),
		filename: 'bundle.js',
		publicPath: `http://localhost:8080/static/`
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
				include: [path.resolve(__dirname, "..", "src")]
			}
		]
	},
	progress: true,
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
