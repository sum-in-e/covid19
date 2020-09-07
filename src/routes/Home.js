import React, { useState } from 'react';
import styled from 'styled-components';
import covidApi from '../api';
import Header from '../components/Header';

const Home = () => {
	const [item, setItem] = useState('Home');
	// const hi = covidApi.countryStatus('S. Korea');

	return (
		<Container className="Home">
			<Header />
			<Main>
				<Introduction>
					<TextContainer>
						<TextBox>
							<TextRed>Stay</TextRed>
							<TextWhite>Home</TextWhite>
						</TextBox>
						<TextBox>
							<TextWhite>Stay</TextWhite>
							<TextRed>Safe</TextRed>
						</TextBox>
					</TextContainer>
					<P>Coronavirus disease (COVID-19) is an disease caused by a newly discovered coronavirus.</P>
					<Btn>LEARN MORE</Btn>
				</Introduction>
				<Img url={require('../assets/home.png')} />
				<StatusKR></StatusKR>
			</Main>
		</Container>
	);
};

const Container = styled.div``;

const Main = styled.main`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 10vw;
	height: 90vh;
	width: 100%;
`;

const Introduction = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const TextContainer = styled.div`
	margin-bottom: 3rem;
`;

const TextBox = styled.div`
	display: flex;
	font-size: 5rem;
`;

const TextRed = styled.p`
	padding-right: 1rem;
	color: #f14338;
`;

const TextWhite = styled.p`
	padding-right: 1rem;
	font-weight: bold;
	color: white;
`;

const P = styled.p`
	margin-bottom: 3rem;
	font-size: 1.1rem;
	color: white;
`;

const Btn = styled.button`
	height: 7%;
	width: 20%;
	background-color: #f14338;
	outline: none;
	border: none;
	color: white;
	cursor: pointer;
`;

const Img = styled.section`
	height: auto;
	width: 95%;
	background-image: url(${props => props.url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

const StatusKR = styled.section`
	grid-column: 1 / -1;
`;

export default Home;
