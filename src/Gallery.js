import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqueID from 'uniqid';
import PropTypes from 'prop-types';

import getDataFromAPI from './getDataFromAPI';
import './gallery.scss';

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
					return (
						<figure key={uniqueID()} className="photo-container">
							<a href={photo.link} rel="noopener noreferrer" target="_blank" className="photo-wrapper">
								<img
									src={photo.imageSrc}
									alt={`${photo.title} by ${photo.author}. Click to open on Flickr`}
									className="photo"
								/>
							</a>
						</figure>
					);
				})}
			</section>
		);
	}
}

Gallery.propTypes = {
	photos : PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
