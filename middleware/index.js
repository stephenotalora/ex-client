const async = require('async');
const {isDev} = require('node-toolbox')();
const mogan = require('morgan');
const path = require('path');
const rootDir = require('app-root-dir');
const Router = require('./../router');
const Promise = require('bluebird');
const serveStatic = require('serve-static');
const webpack = require('webpack');
const webpackDevConf = require('./../webpack/webpack.dev.config');

const _initWebpack = (app) => {
	const compiler = webpack(webpackDevConf);

	// add additional webpack dev middleware options as necessary
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(require('webpack-dev-middleware')(compiler, {
		contentBase: `${app.get('domain')}:${8080}`,
		quite: false,
		noInfo: false,
		hot: true,
		inline: true,
		lazy: false,
		publicPath: webpackDevConf.output.publicPath,
		headers: {'Access-Control-Allow-Origin': '*'},
		stats: {colors: true}
	}));
};

const _initMiddleware = (app, callback) => {
	const _isDev = isDev();
	app.use(mogan(_isDev ? 'dev' : 'tiny'));
	app.use(serveStatic(path.join(rootDir.get(), 'public')));
	app.use(Router);

	if (_isDev) _initWebpack(app);

	callback(null);
};

module.exports = exports = (app) => {
	return new Promise((resolve, reject) => {
		async.waterfall([
			(cb) => {
				require('./initConfig')(app, cb);
			}, (config, cb) => {
				require('./initSettings')(app, config, cb);
			}, (cb) => {
				_initMiddleware(app, cb);
			}
		], (err) => {
			if (err) return reject(err);
			return resolve();
		});
	});
};
