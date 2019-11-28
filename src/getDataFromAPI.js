import jsonp from 'jsonp';

import { PHOTOS_FETCHED } from './constants';

const getDataFromAPI = () => {
	return function getPhotos(dispatch) {
		const PHOTOS_TO_SHOW = 9;
		const TAGS = [
			// 'marilyn',
			// 'monroe',
			'marylin monroe'
		].join();

		// TAGMODE:
		// set to 'any' to show photos with any tag from the tags' list
		// set to 'all' to show photos that have all the tags
		const TAGMODE = 'any';

		const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${TAGS}&tagmode=${TAGMODE}`;

		window.jsonFlickrFeed = (response) => {
			const photos = response.items.slice(0, PHOTOS_TO_SHOW).map((item) => ({
				title    : item.title,
				author   : item.author.match(/\("(.*)"\)/)[1],
				imageSrc : item.media.m,
				link     : item.link
			}));

			dispatch({
				type   : PHOTOS_FETCHED,
				photos
			});
		};

		jsonp(url);
	};
};

export default getDataFromAPI;
