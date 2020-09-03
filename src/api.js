import axios from 'axios';

const covidApi = {
	worldStatus: () =>
		axios.get('/v1', {
			headers: {
				'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			},
		}),
	countryStatus: country =>
		axios.get(`/v1/${country}`, {
			headers: {
				'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			},
		}),
};

export default covidApi;
