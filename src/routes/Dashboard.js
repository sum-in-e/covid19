import React, { useState } from 'react';
import styled from 'styled-components';
import covidApi from '../api';
import Header from '../components/Header';
import Board from '../components/Board';

const Dashboard = () => {
	const getKoreaStatus = covidApi.countryStatus('S. Korea');
	const getWorldStatus = covidApi.worldStatus();
	getKoreaStatus.then(hi => console.log(hi));
	getWorldStatus.then(hi => console.log(hi));

	return (
		<Container>
			<Header />
			<Main>
				<MainTitle>Coronavirus Dashboard</MainTitle>
				<Board></Board>
				<Board></Board>
				{/* 여기 나중에 map으로 똑같이 찍어내기 */}
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
