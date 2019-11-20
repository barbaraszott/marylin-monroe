import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Header.scss';

export class Header extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<header className="header" />
				<nav className="navbar">
					<Link to="/">User</Link>
					<Link to="/gallery">Gallery</Link>
				</nav>
				<div className="user-photo" />
			</React.Fragment>
		);
	}
}

Header.propTypes = {};

export default Header;
