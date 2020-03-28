import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 2px 5px #f0f0f0;
	font-size: 20px;
	position: sticky;
	top: 0;
`;

const Header = () => <HeaderContainer>Personal Notes</HeaderContainer>;

export default Header;
