import { useState, useEffect } from 'react';
import defaultAxios from 'axios';

const useAxios = (options, axiosInstance = defaultAxios) => {
	const [item, setItem] = useState({
		loading: true,
		data: null,
		error: null,
	});

	useEffect(() => {
		const getData = () => {
			axiosInstance(options)
				.then(response => {
					setItem({
						...item,
						loading: false,
						data: response.data,
					});
				})
				.catch(error => {
					setItem({
						...item,
						loading: false,
						error,
					});
				});
		};

		getData();
	}, []);

	if (!options.url) {
		return;
	}

	return item;
};

export default useAxios;

/*
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
*/
