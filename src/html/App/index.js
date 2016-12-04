/* eslint-disable no-process-env */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Root from './Root';
import Static from './Static';

const isServerRendering = typeof window === 'undefined';

if (!isServerRendering) {
	// TODO: replace with reducers
	ReactDOM.render(
		React.createElement(Root),
		document.getElementById('app')
	);
}

module.exports = exports = () => {
	return ReactDOMServer.renderToStaticMarkup(
		React.createElement(Static)
	);
};
