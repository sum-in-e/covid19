import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap';
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
				<WholeWorld>
					<SectionHeader>
						<Title>World</Title>
						<SearchArea>
							<SearchIcon />
							<Input type="text" />
						</SearchArea>
					</SectionHeader>
				</WholeWorld>
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

const WholeWorld = styled.section`
	width: 100%;
	height: 70vh;
	margin-bottom: 2rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const SectionHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1.5rem;
`;

const Title = styled.h1`
	font-size: 1.5rem;
`;

const SearchArea = styled.div`
	display: flex;
	justify-content: center;
	height: 2.5rem;
	width: 35%;
	padding: 5px;
	background-color: #191b26;
	border-radius: 30px;
`;

const SearchIcon = styled(Search)`
	width: 1rem;
	height: auto;
	margin-right: 5px;
`;

const Input = styled.input`
	height: 100%;
	width: 90%;
	border: none;
	outline: none;
	color: white;
	background-color: #191b26;
	font-size: 1.2rem;
`;

export default Dashboard;
