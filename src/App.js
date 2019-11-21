import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './Header';
import User from './User';
import Gallery from './Gallery';

const mapStateToProps = (state) => {
	return {};
};

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<main className="main">
					<Route exact path="/" component={User} />
					<Route path="/gallery" component={Gallery} />
				</main>
			</Router>
		</div>
	);
}

export default connect(mapStateToProps)(App);
