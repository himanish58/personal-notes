import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
	color: red;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	font-family: 'Hack';
`;
function App() {
	return <Header>Hello World</Header>;
}

export default App;
