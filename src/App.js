import React from 'react';
import './App.scss';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {};
};

function App() {
	return (
		<React.Fragment>
			<h1>Hello.</h1>
		</React.Fragment>
	);
}

export default connect(mapStateToProps)(App);
