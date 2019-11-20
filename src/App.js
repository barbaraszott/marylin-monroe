import React from 'react';
import './App.css';

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
		<React.Fragment>
			<Router>
				<Header />
				<main className="main">
					<Route exact path="/" component={User} />
					<Route path="/gallery" component={Gallery} />
				</main>
			</Router>
		</React.Fragment>
	);
}

export default connect(mapStateToProps)(App);
