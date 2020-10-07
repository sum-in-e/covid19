import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Board = ({ loading, data, error }) => {
	return (
		<>
			{error ? (
				<LoaderContainer>에러 발생</LoaderContainer>
			) : (
				<>
					{loading ? (
						<LoaderContainer>
							<Loader />
						</LoaderContainer>
					) : (
						<Container>
							{data && Object.keys(data).length > 0 && (
								<>
									<Header>
										{data.Country_text === 'World' ? (
											<Title>{data.Country_text} Total</Title>
										) : (
											<Title>{data.Country_text ? data.Country_text : '-'}</Title>
										)}
										<LastUpdate>
											Last Update : {data['Last Update'] ? data['Last Update'] : '-'}
										</LastUpdate>
									</Header>
									<Results>
										<Result>
											<Total>
												<H3>Coronavirus Cases</H3>
												<TotalCount>
													{data['Total Cases_text'] ? data['Total Cases_text'] : '-'}
												</TotalCount>
											</Total>
											<New>
												<H4>New Cases</H4>
												<NewCount>
													{data['New Cases_text'] ? data['New Cases_text'] : '-'}
												</NewCount>
											</New>
										</Result>
										<Result>
											<Total>
												<H3>Deaths</H3>
												<TotalCount>
													{data['Total Deaths_text'] ? data['Total Deaths_text'] : '-'}
												</TotalCount>
											</Total>
											<New>
												<H4>New Deaths</H4>
												<NewCount>
													{data['New Deaths_text'] ? data['New Deaths_text'] : '-'}
												</NewCount>
											</New>
										</Result>
										<Result>
											<Total>
												<H3>Recovered</H3>
												<TotalCount>
													{data['Total Recovered_text'] ? data['Total Recovered_text'] : '-'}
												</TotalCount>
											</Total>
										</Result>
										<Result>
											<Total>
												<H3>Active Cases</H3>
												<TotalCount>
													{data['Active Cases_text'] ? data['Active Cases_text'] : '-'}
												</TotalCount>
											</Total>
										</Result>
									</Results>
								</>
							)}
						</Container>
					)}
				</>
			)}
		</>
	);
};

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 35vh;
	padding: 1.5rem;
	margin-bottom: 2.5rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const Container = styled.section`
	width: 100%;
	height: 35vh;
	padding: 1.5rem;
	margin-bottom: 2.5rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

const Title = styled.h2`
	font-size: 1.5rem;
`;

const LastUpdate = styled.span`
	color: gray;
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
	border-left: dotted 1px #3e3f51;
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
	font-size: 2.2rem;
	font-weight: bold;
`;

const New = styled.div``;

const H4 = styled.h4`
	padding-bottom: 0.5rem;
	font-size: 0.9rem;
	color: #646b64;
`;

const NewCount = styled.span`
	font-size: 1.1rem;
`;

export default Board;
