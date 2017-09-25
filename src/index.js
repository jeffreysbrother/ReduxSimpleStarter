import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA8e9vk-gXKsvt5CXE7ABZQJYOgdeUSMuk';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
	console.log(data);
});

// downward data-flow: only the most parent component should be responsible for fetching data
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
