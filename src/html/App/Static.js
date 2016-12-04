import React, {Component} from 'react';
import Root from './Root';

export default class Static extends Component {
	static displayName = "Static";

	shouldComponentUpdate (nextProps, nextState) {
		return false;
	}

	render () {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<title>Loading ...</title>
				</head>
				<body>
					<Root />
					<script src="/static/bundle.js" />
				</body>
			</html>
		);
	}
}
