import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqueID from 'uniqid';
import PropTypes from 'prop-types';

import './gallery.scss';

import Photo from './Photo';
import getDataFromAPI from './getDataFromAPI';

const mapDispatchToProps = {
	getDataFromAPI
};

const mapStateToProps = (state) => ({ photos: state.photos });

export class Gallery extends Component {
	componentDidMount() {
		this.props.getDataFromAPI();
	}

	render() {
		return (
			<section className="gallery">
				{this.props.photos.map((photo) => {
					const photoProps = {
						link     : photo.link,
						imageSrc : photo.imageSrc,
						title    : photo.title,
						author   : photo.author
					};

					return <Photo key={uniqueID()} {...photoProps} />;
				})}
			</section>
		);
	}
}

Gallery.propTypes = {
	photos         : PropTypes.array.isRequired,
	getDataFromAPI : PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
