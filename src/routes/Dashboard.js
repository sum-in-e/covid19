import React, { useState } from 'react';
import styled from 'styled-components';
import covidApi from '../api';
import Header from '../components/Header';

const Dashboard = () => {
	const getKoreaStatus = covidApi.countryStatus('S. Korea');
	const getWorldStatus = covidApi.worldStatus();
	getKoreaStatus.then(hi => console.log(hi));

	return (
		<Container>
			<Header />
			<Main>
				<MainTitle>Coronavirus Dashboard</MainTitle>
				<Board>
					<Title>S.Korea</Title>
					<Results>
						<Result>
							<Total>
								<H3>Coronavirus Cases</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Cases</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Deaths</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Deaths</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Recovered</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Recoveries</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Active Cases</H3>
								<TotalCount>0</TotalCount>
							</Total>
						</Result>
					</Results>
				</Board>
				<Board>
					<Title>Worldwide</Title>
					<Results>
						<Result>
							<Total>
								<H3>Coronavirus Cases</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Cases</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Deaths</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Deaths</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Recovered</H3>
								<TotalCount>0</TotalCount>
							</Total>
							<New>
								<H4>New Recoveries</H4>
								<NewCount>0</NewCount>
							</New>
						</Result>
						<Result>
							<Total>
								<H3>Active Cases</H3>
								<TotalCount>0</TotalCount>
							</Total>
						</Result>
					</Results>
				</Board>
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

const Board = styled.section`
	width: 100%;
	height: 35vh;
	padding: 1.5rem;
	margin-bottom: 2rem;
	background-color: rgba(7, 12, 50, 0.8);
	border-radius: 25px;
`;

const Title = styled.h2`
	margin-bottom: 1.5rem;
	font-size: 1.5rem;
`;

const Results = styled.article`
	width: 100%;
	height: 70%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	& > div:nth-child(1) {
		color: #21bf73;
	}

	& > div:nth-child(2) {
		color: #f83a30;
	}

	& > div:nth-child(3) {
		color: #1179e4;
	}

	& > div:nth-child(4) {
		color: #05dfd7;
	}
`;

const Result = styled.div`
	padding: 1rem;
	border-left: dotted 1px #21252a;
`;

const Total = styled.div`
	margin-bottom: 1.5rem;
`;

const H3 = styled.h3`
	padding-bottom: 0.5rem;
	font-size: 1.2rem;
	color: gray;
`;

const TotalCount = styled.span`
	font-size: 2.5rem;
	font-weight: bold;
`;

const New = styled.div``;

const H4 = styled.h4`
	padding-bottom: 0.5rem;
	font-size: 0.9rem;
	color: #646b64;
`;

const NewCount = styled.span`
	font-size: 1.2rem;
`;

export default Dashboard;
