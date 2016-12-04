/* eslint-disable no-process-env */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Root from './Root';
import Static from './Static';

// TODO: replace the following two checks with reducers!
if (typeof window !== 'undefined') {
	ReactDOM.render(
		React.createElement(Root),
		document.getElementById('root')
	);
}

if ((!process.env.NODE_ENV || process.env.NODE_ENV === 'develop') && module.hot) {
	module.hot.accept('./Root', () => {
		ReactDOM.render(
			React.createElement(Root),
			document.getElementById('root')
		);
	});
}

module.exports = exports = () => {
	return ReactDOMServer.renderToString(
		React.createElement(Static)
	);
};
