import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
	color: rebeccapurple;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	font-family: 'Hack';
`;

const Homepage = () => <Heading>Homepage</Heading>;

export default Homepage;
