const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: [
			'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
			'webpack/hot/only-dev-server',
			path.resolve(__dirname, '../src/html/App')
		]
	},
	module: {
		loaders: [
			{
				test: /\.js|.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
				include: [path.resolve(__dirname, "..", "src")]
			}
		]
	},
	node: {fs: "empty"},
	output: {
		path: path.resolve(__dirname, './../public/static/'),
		filename: 'bundle.js',
		publicPath: `http://localhost:8080/static/`
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	progress: true
};
