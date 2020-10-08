import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ location: { pathname } }) => {
	return (
		<Container>
			<Title>
				<TLink to={'/'}>
					<RedP>COVID</RedP>
					<WhiteP>-19</WhiteP>
				</TLink>
			</Title>
			<Navigation>
				<Ul>
					<Li underline={pathname === '/'}>
						<SLink to={'/'}>Home</SLink>
					</Li>
					<Li underline={pathname === '/about'}>
						<SLink to={'/about'}>About</SLink>
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
	position: fixed;
	top: 0;
	padding: 0 10vw;
	height: 10vh;
	width: 100%;
	border-bottom: solid 1px #070c1f;
	font-size: 1.1rem;
	color: white;
	background-color: #070c1f;
	@media (max-width: 1024px) {
		font-size: 1.3rem;
		padding: 0 6vw;
	}
`;

const Title = styled.div``;

const TLink = styled(Link)`
	display: flex;
	font-size: 1.3rem;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
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
	@media (max-width: 1250px) {
		right: -12rem;
	}
	@media (max-width: 1024px) {
		position: static;
		width: 40%;
	}
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
	@media (max-width: 1024px) {
		font-size: 1.1rem;
		height: 45%;
		width: 18%;
	}
`;

const Span = styled.span``;

export default withRouter(Header);
