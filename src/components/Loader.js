import React from 'react';
import styled from 'styled-components';

const Loader = () => {
	return (
		<Container>
			<Span>Loading...</Span>
		</Container>
	);
};

const Container = styled.div``;

const Span = styled.span`
	font-size: 1.5rem;
`;

export default Loader;
