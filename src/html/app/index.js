import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';
import Static from './Static';

if (module.hot) {
	require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
		getRootInstances () {
			return [
				ReactDOM.render(
					React.createElement(Static),
					document.getElementById('app')
				)
			];
		}
	});
}

module.exports = exports = () => {
	return renderToString(
		React.createElement(Static)
	);
};
