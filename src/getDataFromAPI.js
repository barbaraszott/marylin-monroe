import jsonp from 'jsonp';

const getDataFromAPI = () => {
	return function getPhotos(dispatch) {
		const PHOTOS_TO_SHOW = 9;
		const TAGS = [
			'marilyn',
			'monroe'
		].join();

		const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${TAGS}`;

		window.jsonFlickrFeed = (response) => {
			console.log('RESPONSE: ', response);
			console.log('ITEMS: ', response.items);

			const photos = response.items.slice(0, PHOTOS_TO_SHOW).map((item) => ({
				title    : item.title,
				author   : item.author.match(/\("(.*)"\)/)[1],
				// author      : item.author.split(/\("|"\)/)[1],
				imageSrc : item.media.m,
				link     : item.link
			}));

			console.log('PHOTOS', photos);

			dispatch({
				type   : 'PHOTOS_FETCHED',
				photos
			});
		};

		jsonp(url);
	};
};

export default getDataFromAPI;
