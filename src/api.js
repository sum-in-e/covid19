import Axios from 'axios';

const api = country => {
	return Axios.request({
		url: `/v1${country}`,
		headers: {
			'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
			'x-rapidapi-key': process.env.REACT_APP_API_KEY,
		},
	});
};

export default api;
