import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import uniqueID from 'uniqid';
import jsonp from 'jsonp';
import PropTypes from 'prop-types';

import './gallery.scss';

const mapStateToProps = (state) => ({ photos: state.photos });

export class Gallery extends PureComponent {
	componentDidMount() {

		const TAGS = [
			'marilyn',
			'monroe'
		].join();

		const PHOTOS_TO_SHOW = 9;

		const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${TAGS}`;

		window.jsonFlickrFeed = (response) => {
			console.log(response.items);

			const photos = response.items.slice(0, PHOTOS_TO_SHOW).map((item) => ({
				title    : item.title,
				author   : item.author.match(/\("(.*)"\)/)[1],
				// author      : item.author.split(/\("|"\)/)[1],
				imageSrc : item.media.m,
				link     : item.link
			}));

			console.log(photos);

			this.props.dispatch({
				type   : 'PHOTOS_FETCHED',
				photos
			});
		};

		jsonp(url);
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

export default connect(mapStateToProps)(Gallery);
