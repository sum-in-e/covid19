import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Container>
			<Main>
				<Info>
					<TitleContainer>
						<TextBox>
							<TextRed>Stay</TextRed>
							<TextWhite>Home</TextWhite>
						</TextBox>
						<TextBox>
							<TextWhite>Stay</TextWhite>
							<TextRed>Safe</TextRed>
						</TextBox>
					</TitleContainer>
					<P>Coronavirus disease (COVID-19) is an disease caused by a newly discovered coronavirus.</P>
					<SLink to={'/about'}>
						<Btn>LEARN MORE</Btn>
					</SLink>
				</Info>
				<Img url={require('../assets/home.png')} />
			</Main>
		</Container>
	);
};

const Container = styled.div`
	padding-top: 10vh;
`;

const Main = styled.main`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 10vw;
	height: 90vh;
	width: 100%;
	@media (max-width: 1024px) {
		display: block;
		padding: 0 6vw;
	}
`;

const Info = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 1024px) {
		height: 55%;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 3rem;
`;

const TextBox = styled.div`
	display: flex;
	font-size: 5rem;
	@media (max-width: 1250px) {
		font-size: 4.5rem;
	}
	@media (max-width: 1024px) {
		font-size: 4.3rem;
		justify-content: center;
	}
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
	width: 70%;
	margin-bottom: 3rem;
	font-size: 1.1rem;
	color: white;
	@media (max-width: 1250px) {
		width: 85%;
	}
	@media (max-width: 1024px) {
		width: 90%;
		text-align: center;
	}
`;

const SLink = styled(Link)`
	height: 6%;
	width: 20%;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: white;
	}
	@media (max-width: 1250px) {
		width: 25%;
	}
	@media (max-width: 1024px) {
		height: 10%;
		width: 20%;
	}
`;

const Btn = styled.button`
	width: 100%;
	height: 100%;
	font-size: 0.8rem;
	font-weight: bold;
	background-color: #f14338;
	outline: none;
	border: none;
	color: white;
	cursor: pointer;
	transition: all 0.5s;
	&:hover {
		background-color: white;
		color: #f14338;
	}
`;

const Img = styled.section`
	height: auto;
	width: 95%;
	background-image: url(${props => props.url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	@media (max-width: 1024px) {
		width: auto;
		height: 40%;
	}
`;

export default Home;
