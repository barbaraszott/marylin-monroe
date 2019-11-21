import React, { Component } from 'react';
import { connect } from 'react-redux';
import jsonp from 'jsonp';
import PropTypes from 'prop-types';

import './gallery.scss';

const mapStateToProps = (state) => ({ photos: state.photos });

export class Gallery extends Component {
	static propTypes = {};
	componentDidMount() {
		if (this.props.photos.length !== 0) return;

		const TAGS = [
			'marilyn',
			'monroe'
		].join();

		const PHOTOS_TO_SHOW = 9;

		const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${TAGS}`;

		window.jsonFlickrFeed = (response) => {
			const photos = response.items.slice(0, PHOTOS_TO_SHOW).map((item) => ({
				title    : item.title,
				author   : item.author.match(/\("(.*)"\)/)[1],
				// author      : item.author.split(/\("|"\)/)[1],
				imageSrc : item.media.m,
				link     : item.link
			}));

			this.props.dispatch({
				type   : 'PHOTOS_FETCHED',
				photos
			});
		};

		jsonp(url);
	}

	render() {
		return <h1>Gallery, wohooo!</h1>;
	}
}


export default connect(mapStateToProps)(Gallery);
