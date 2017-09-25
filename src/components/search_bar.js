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
			<div className="search-bar">
				{/* a controlled component has its value set by state */}
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
