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
					{/* TODO: read more about exact */}
					<NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--selected">
						<i class="fas fa-user fa-lg" />
					</NavLink>
					<NavLink to="/gallery" className="navbar__link" activeClassName="navbar__link--selected">
						<i class="far fa-image fa-lg" />
					</NavLink>
				</nav>
				<div className="user-photo" />
			</React.Fragment>
		);
	}
}

Header.propTypes = {};

export default Header;
