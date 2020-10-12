import React, { useEffect } from 'react';
import styled from 'styled-components';

const About = () => {
	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			<Main>
				<Intro>
					<Description>
						<Title>Stay At Home Quarantine To Stop Corona Virus</Title>
						<P>
							There Is No Specific Medicine To Prevent Or Treat Coronavirus Disease (COVID-19). People May
							Need Supportive Care To.
						</P>
					</Description>
					<Img image={require('../assets/stayhome.png')} />
				</Intro>
				<Definition>
					<DefinitionImg image={require('../assets/covid19.png')}></DefinitionImg>
					<Description>
						<Title>What Is Covid-19</Title>
						<Text>
							Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And Some Cause Disease.
							A Newly Identified Type Has Caused A Recent Outbreak Of Respiratory Illness Now Called
							COVID-19.
						</Text>
					</Description>
				</Definition>
				<Symptoms>
					<Title>Symptoms</Title>
					<Contents>
						<Content>
							<ContentImg image={require('../assets/Fever.png')} />
							<ContentTitle>Fever</ContentTitle>
						</Content>
						<Content>
							<ContentImg image={require('../assets/Headache.png')} />
							<ContentTitle>Headache</ContentTitle>
						</Content>
						<Content>
							<ContentImg image={require('../assets/Out_of_breath.png')} />
							<ContentTitle>Out Of Breath</ContentTitle>
						</Content>
						<Content>
							<ContentImg image={require('../assets/Flu.png')} />
							<ContentTitle>Flu</ContentTitle>
						</Content>
						<Content>
							<ContentImg image={require('../assets/Severe_cough.png')} />
							<ContentTitle>Severe Cough</ContentTitle>
						</Content>
						<Content>
							<ContentImg image={require('../assets/Sore_throat.png')} />
							<ContentTitle>Sore Throat</ContentTitle>
						</Content>
					</Contents>
				</Symptoms>
				<Prevention>
					<Title>Preventive Method</Title>
					<Methods>
						<Method>
							<MethodImg image={require('../assets/washHands.png')} />
							<MethodTitle>Wash your hands.</MethodTitle>
						</Method>
						<Method>
							<MethodImg image={require('../assets/mask.png')} />
							<MethodTitle>Put on a mask.</MethodTitle>
						</Method>
						<Method>
							<MethodImg image={require('../assets/distance.png')} />
							<MethodTitle>Keep your social distance.</MethodTitle>
						</Method>
						<Method>
							<MethodImg image={require('../assets/disinfection.png')} />
							<MethodTitle>Disinfect the surrounding area.</MethodTitle>
						</Method>
					</Methods>
				</Prevention>
			</Main>
		</Container>
	);
};

const Container = styled.div`
	background-color: #070c1f;
	padding-top: 10vh;
`;

const Main = styled.main``;

const Intro = styled.section`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(2, 1fr);
	gap: 3rem;
	height: 90vh;
	margin: 0 10vw;
	@media (max-width: 1024px) {
		display: block;
		margin: 0 6vw;
		padding-top: 2rem;
	}
`;

const Description = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	padding-bottom: 2rem;
	font-size: 3.3rem;
	line-height: 4rem;
	color: #f14338;
	@media (max-width: 1024px) {
		font-size: 2.5rem;
		width: 65%;
		text-align: center;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const P = styled.p`
	font-size: 1.3rem;
	line-height: 2rem;
	color: white;
	@media (max-width: 1024px) {
		text-align: center;
		width: 70%;
		margin-bottom: 5rem;
		font-size: 1.1rem;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const Img = styled.div`
	width: 100%;
	height: auto;
	background-image: url(${props => props.image});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 1024px) {
		width: auto;
		height: 40vh;
	}
	@media (max-width: 800px) {
		height: 30vh;
	}
	@media (max-width: 414px) {
		height: 25vh;
	}
`;

const Definition = styled.section`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: repeat(2, 1fr);
	height: 90vh;
	padding: 0 10vw;
	background-color: white;
	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10vh 6vw;
	}
`;

const DefinitionImg = styled.div`
	width: 60%;
	height: auto;
	margin-left: 10rem;
	background-image: url(${props => props.image});
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 1024px) {
		width: auto;
		height: 30vh;
		margin-bottom: 3rem;
	}
	@media (max-width: 414px) {
		margin-left: 0;
		height: 25vh;
	}
`;

const Text = styled.p`
	width: 80%;
	line-height: 2rem;
	color: #070c1f;
	@media (max-width: 1024px) {
		text-align: center;
	}
`;

const Symptoms = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90vh;
	padding: 5vh 15vw;
	background-color: white;
	@media (max-width: 800px) {
		padding: 5vh 10vw;
	}
`;

const Contents = styled.article`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2rem;
	height: 90%;
	width: 100%;
	@media (max-width: 414px) {
		gap: 0.5rem;
	}
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 70% 30%;
	height: 100%;
	width: 100%;
`;

const ContentImg = styled.div`
	height: 100%;
	width: auto;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	@media (max-width: 414px) {
		width: 100%;
		height: auto;
	}
`;

const ContentTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: #070c1f;
	text-align: center;
`;

const Prevention = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90vh;
	padding: 15vh 20vh 5vh 20vh;
	background-color: white;
	@media (max-width: 1024px) {
		padding: 10vh 6vh 5vh 6vh;
	}
`;

const Methods = styled.article`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	gap: 5rem;
	width: 100%;
	height: 100%;
	margin-top: 1rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 1rem;
	}
`;

const Method = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 70% 30%;
	height: 80%;
	width: 100%;
	transition: all 0.5s;
	@media (max-width: 1024px) {
		grid-template-rows: 80% 20%;
	}
`;

const MethodImg = styled.div`
	height: 100%;
	width: auto;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
`;

const MethodTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	text-align: center;
	color: #070c1f;
`;

export default About;
