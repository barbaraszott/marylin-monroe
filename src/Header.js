import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

function Header() {
	return (
		<React.Fragment>
			<header className="header">
				<div className="user-photo" />
			</header>
			<nav className="navbar">
				{/* TODO: read more about exact */}
				<NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--selected">
					<i className="fas fa-user fa-lg" />
				</NavLink>
				<NavLink to="/gallery" className="navbar__link" activeClassName="navbar__link--selected">
					<i className="far fa-image fa-lg" />
				</NavLink>
			</nav>
		</React.Fragment>
	);
}

export default Header;
