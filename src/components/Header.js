import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ location: { pathname } }) => {
	return (
		<Container>
			<Title>
				<RedP>COVID</RedP>
				<WhiteP>-19</WhiteP>
			</Title>
			<Navigation>
				<Ul>
					<Li underline={pathname === '/'}>
						<SLink to={'/'}>Home</SLink>
					</Li>
					<Li underline={pathname === '/symptoms'}>
						<SLink to={'/symptoms'}>Symptoms</SLink>
					</Li>
					<Li underline={pathname === '/dashboard'}>
						<SLink to={'/dashboard'}>Dashboard</SLink>
					</Li>
				</Ul>
			</Navigation>
			<HotLine>
				<Span>HOTLINE : 1399</Span>
			</HotLine>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10vw;
	height: 10vh;
	font-size: 1.1rem;
	color: white;
`;

const Title = styled.div`
	display: flex;
	font-size: 1.3rem;
`;

const RedP = styled.p`
	color: #f14338;
`;

const WhiteP = styled.p`
	color: white;
`;

const Navigation = styled.nav`
	position: relative;
	right: -15rem;
	width: 25%;
	height: 50%;
`;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	height: 100%;
`;

const SLink = styled(Link)`
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
		color: white;
	}
`;

const Li = styled.li`
	display: flex;
	align-items: center;
	border-bottom: 2px solid ${props => (props.underline ? '#f14338' : 'transparent')};
	cursor: pointer;
`;

const HotLine = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50%;
	width: 15%;
	background-color: #f14338;
`;

const Span = styled.span``;

export default withRouter(Header);
