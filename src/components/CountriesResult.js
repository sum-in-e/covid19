import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap';
import CountryCases from './CountryCases';
import Loader from './Loader';
import Api from '../api';

const CountriesResult = () => {
	const [input, setInput] = useState('');
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
		Api('')
			.then(response => {
				const data = response.data.filter(data => data.Country_text !== undefined);
				setCountries({
					loading: false,
					data: data,
					error: null,
				});
				setAllCountries(data);
			})
			.catch(error => {
				setCountries({
					loading: false,
					data: null,
					error: error,
				});
			});
	}, []);

	return (
		<Container>
			<Header>
				<Title>Countries</Title>
				<SearchArea>
					<SearchIcon />
					<Input type="text" value={input} placeholder="Search" onChange={onChange} />
				</SearchArea>
			</Header>
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
				{countries.error ? (
					<LoaderContainer>에러 발생</LoaderContainer>
				) : (
					<>
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
					</>
				)}
			</WorldArticle>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	height: 80vh;
	margin-bottom: 2rem;
	background-color: #1e2033;
	border-radius: 25px;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20%;
	padding: 2rem 1.5rem;
	@media (max-width: 414px) {
		flex-direction: column;
		align-items: flex-start;
		height: 22%;
	}
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
	@media (max-width: 1024px) {
		width: 40%;
	}
	@media (max-width: 800px) {
		width: 50%;
	}
	@media (max-width: 414px) {
		width: 100%;
	}
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
	overflow: scroll;
`;

const Category = styled.div`
	display: grid;
	grid-template-columns: repeat(8, minmax(100px, 1fr));
	grid-template-rows: 1fr;
	width: 100%;
	height: 12%;
	padding: 0 1.5rem;
	background-color: #272f38;
	font-size: 1.1rem;
	@media (max-width: 1024px) {
		width: 120%;
	}
	@media (max-width: 800px) {
		width: 165%;
	}
	@media (max-width: 414px) {
		width : 250%;
	}
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

export default CountriesResult;
