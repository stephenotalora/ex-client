import React, {Component} from 'react';
import shallowCompare from 'shallow-compare';

export default class Root extends Component {
	static displayName = "Root";

	shouldComponentUpdate (nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render () {
		const id = Root.displayName.toLowerCase();

		return (
			<div id={id}>
				Hello World!
			</div>
		);
	}
}
