import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { PHOTOS_FETCHED } from './constants';

const initialState = {
	photos : []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case PHOTOS_FETCHED:
			return { ...state, photos: action.photos };
		default:
			return state;
	}
}

let store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
