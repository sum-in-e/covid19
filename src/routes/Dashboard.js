import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Search } from '@styled-icons/bootstrap';
import Board from '../components/Board';
import CountryCases from '../components/CountryCases';
import Loader from '../components/Loader';

const Dashboard = () => {
	const [input, setInput] = useState('');
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
	const [countries, setCountries] = useState({
		loading: true,
		data: null,
		error: null,
	});
	const [allCountries, setAllCountries] = useState([]);

	const onChange = e => {
		const {
			target: { value },
		} = e;
		const inputValue = value.toLowerCase();
		const matchingData = allCountries.filter(country => country.Country_text.toLowerCase().includes(inputValue));
		setInput(inputValue);
		setCountries({
			loading: false,
			data: matchingData,
			error: null,
		});
	};

	useEffect(() => {
		Axios.request({
			url: '/v1',
			headers: {
				'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			},
		})
			.then(response => {
				const data = response.data.filter(data => data.Country_text !== undefined);
				const koreaData = data.filter(data => data.Country_text === 'S. Korea')[0];
				const worldwideData = data.filter(data => data.Country_text === 'World')[0];
				setKorea({
					loading: false,
					data: koreaData,
					error: null,
				});
				setWorldwide({
					loading: false,
					data: worldwideData,
					error: null,
				});
				setCountries({
					loading: false,
					data: data,
					error: null,
				});
				setAllCountries(data);
			})
			.catch(error => {
				setKorea({
					loading: false,
					data: null,
					error: error,
				});
				setWorldwide({
					loading: false,
					data: null,
					error: error,
				});
				setCountries({
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
				<WholeWorld>
					<WorldHeader>
						<Title>Countries</Title>
						<SearchArea>
							<SearchIcon />
							<Input type="text" value={input} placeholder="Search" onChange={onChange} />
						</SearchArea>
					</WorldHeader>
					<WorldArticle>
						<Category>
							<Name>Name</Name>
							<Case>Confirmed</Case>
							<Case>New Cases</Case>
							<Case>Deaths</Case>
							<Case>New Deaths</Case>
							<Case>Recovered</Case>
							<Case>Active</Case>
						</Category>
						{countries.loading ? (
							<LoaderContainer>
								<Loader />
							</LoaderContainer>
						) : (
							<Results>
								{countries.data &&
									countries.data.length > 0 &&
									countries.data.map((result, index) => <CountryCases key={index} data={result} />)}
							</Results>
						)}
					</WorldArticle>
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
	height: 80vh;
	margin-bottom: 2rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const WorldHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20%;
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
	margin-right: 10px;
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

const WorldArticle = styled.article`
	height: 75%;
	font-size: 1.2rem;
	color: gray;
`;

const Category = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 1fr;
	width: 100%;
	height: 12%;
	padding: 0 3rem 0 1.5rem;
	background-color: #272f38;
	font-size: 1.1rem;
`;

const Name = styled.span`
	grid-column: span 2;
	display: flex;
	align-items: center;
`;

const Case = styled.span`
	display: flex;
	align-items: center;
`;

const Results = styled.div`
	height: 88%;
	overflow: scroll;
	overflow-x: hidden;

	& > div:nth-child(2n) {
		background-color: #1e2033;
	}
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 88%;
`;

export default Dashboard;
