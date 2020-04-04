import React from 'react';
// import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 24px;
	position: sticky;
	top: 0;
	background: #39424e;
	color: #1ba94c;
	padding-left: 16px;

	h1 {
		font-size: 36px;
	}
`;

const Header = ({ loggedIn, logout }) => (
	<HeaderContainer>
		<h1>Personal Notes</h1>
		{loggedIn && (
			<Button label="Logout" disable={false} onClickFunction={logout} />
		)}
	</HeaderContainer>
);

export default Header;
