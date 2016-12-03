import React, {Component} from 'react';
import shalloCompare from 'shallow-compare';

export default class Static extends Component {
	static displayName = "Static";

	shouldComponentUpdate (nextProps, nextState) {
		return shalloCompare(this, nextProps, nextState);
	}

	render () {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<title>Loading ...</title>
				</head>
				<body>
					<div id="app" />
					<script src="/static/bundle.js" />
				</body>
			</html>
		);
	}
}
