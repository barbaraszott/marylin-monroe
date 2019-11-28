import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './photo.scss';

class Photo extends PureComponent {
	render() {
		const { link, imageSrc, title, author } = this.props;

		return (
			<figure className="photo-container">
				<a href={link} rel="noopener noreferrer" target="_blank" className="photo-wrapper">
					<img src={imageSrc} alt={`${title} by ${author}. Click to open on Flickr`} className="photo" />
				</a>
			</figure>
		);
	}
}

Photo.propTypes = {
	link     : PropTypes.string.isRequired,
	imageSrc : PropTypes.string.isRequired,
	title    : PropTypes.string,
	author   : PropTypes.string
};

export default Photo;
