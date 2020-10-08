import React from 'react';
import styled from 'styled-components';

const CountryCases = ({ data }) => {
	return (
		<Container>
			{data.Country_text === 'World' ? (
				<Name>{data.Country_text} Total</Name>
			) : (
				<Name>{data.Country_text ? data.Country_text : ''}</Name>
			)}
			<Count>{data['Total Cases_text'] ? data['Total Cases_text'] : ''}</Count>
			<Count>{data['New Cases_text'] ? data['New Cases_text'] : ''}</Count>
			<Count>{data['Total Deaths_text'] ? data['Total Deaths_text'] : ''}</Count>
			<Count>{data['New Deaths_text'] ? data['New Deaths_text'] : ''}</Count>
			<Count>{data['Total Recovered_text'] ? data['Total Recovered_text'] : ''}</Count>
			<Count>{data['Active Cases_text'] ? data['Active Cases_text'] : ''}</Count>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(8, minmax(100px, 1fr));
	grid-template-rows: 1fr;
	width: 100%;
	height: 12%;
	padding: 0 1.5rem;
	background-color: #272f38;
	font-size: 1.1rem;

	& > span:nth-child(2) {
		color: #21bf73;
	}
	& > span:nth-child(3) {
		color: #21bf73;
	}
	& > span:nth-child(4) {
		color: #f83a30;
	}
	& > span:nth-child(5) {
		color: #f83a30;
	}
	& > span:nth-child(6) {
		color: #1179e4;
	}
	& > span:nth-child(7) {
		color: #05dfd7;
	}
	@media (max-width: 1024px) {
		width: 120%;
	}
	@media (max-width: 800px) {
		width: 165%;
	}
`;

const Name = styled.span`
	grid-column: span 2;
	display: flex;
	align-items: center;
`;

const Count = styled.span`
	display: flex;
	align-items: center;
`;

export default CountryCases;
