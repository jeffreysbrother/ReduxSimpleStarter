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
				{/* a controlled component has its value set by state */}
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default SearchBar;
