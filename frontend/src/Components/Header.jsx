import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	position: sticky;
	top: 0;
	background: #39424e;
	color: #1ba94c;
`;

const Header = () => <HeaderContainer>Personal Notes</HeaderContainer>;

export default Header;
