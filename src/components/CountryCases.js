import React from 'react';
import styled from 'styled-components';

const CountryCases = () => {
	return (
		<Container>
			<Name>USA</Name>
			<Count>0</Count>
			<Count>+0</Count>
			<Count>0</Count>
			<Count>+0</Count>
			<Count>0</Count>
			<Count>0</Count>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 1fr;
	width: 100%;
	height: 12%;
	padding: 0 1.5rem;
	background-color: #272f38;

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
