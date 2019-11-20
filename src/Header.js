import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './Header.scss';

export class Header extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<header className="header" />
				<nav className="navbar">
					<NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--selected">
						User
					</NavLink>
					<NavLink to="/gallery" className="navbar__link" activeClassName="navbar__link--selected">
						Gallery
					</NavLink>
				</nav>
				<div className="user-photo" />
			</React.Fragment>
		);
	}
}

Header.propTypes = {};

export default Header;
