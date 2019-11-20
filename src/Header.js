import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Header.scss';

export class Header extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<header className="header" />
				<div className="user-photo" />
			</React.Fragment>
		);
	}
}

Header.propTypes = {};

export default Header;
