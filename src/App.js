import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import Header from './Header';
import User from './User';
import Gallery from './Gallery';

function App() {
	return (
		<div className="app">
			<Router basename="/">
				<Header />
				<main className="main">
					<Route exact path="/" component={User} />
					<Route path="/gallery" component={Gallery} />
				</main>
			</Router>
		</div>
	);
}

export default connect()(App);
