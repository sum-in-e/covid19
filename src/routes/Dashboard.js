import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import CountriesResult from '../components/CountriesResult';
import Api from '../api';

const Dashboard = () => {
	const [korea, setKorea] = useState({
		loading: true,
		data: null,
		error: null,
	});
	const [worldwide, setWorldwide] = useState({
		loading: true,
		data: null,
		error: null,
	});

	useEffect(() => {
		Api('/S. Korea')
			.then(response => {
				setKorea({
					loading: false,
					data: response.data,
					error: null,
				});
			})
			.catch(error => {
				setKorea({
					loading: false,
					data: null,
					error: error,
				});
			});

		Api('/World')
			.then(response => {
				setWorldwide({
					loading: false,
					data: response.data,
					error: null,
				});
			})
			.catch(error => {
				setWorldwide({
					loading: false,
					data: null,
					error: error,
				});
			});

		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<Main>
				<MainTitle>Coronavirus Dashboard</MainTitle>
				<Board loading={korea.loading} data={korea.data} error={korea.error} />
				<Board loading={worldwide.loading} data={worldwide.data} error={worldwide.error} />
				<CountriesResult />
			</Main>
		</Container>
	);
};

const Container = styled.div``;

const Main = styled.main`
	margin: 10vh 10vw;
`;

const MainTitle = styled.h1`
	padding: 2rem 0;
	font-size: 2.5rem;
	color: white;
`;

export default Dashboard;
