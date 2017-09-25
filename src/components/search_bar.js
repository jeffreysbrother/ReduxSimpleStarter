import React, { Component } from 'react';

// each class-based component has its own state object
// when the state is changed, the component immediately re-renders
// and forces all children to re-render as well
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// initialization of state
		this.state = { term: '' };
	}
	render() {
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
				Value of input: {this.state.term}
			</div>
		);
	}
}

export default SearchBar;
