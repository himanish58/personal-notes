import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	align-items: center;
`;

const PageHeader = ({ title, placeholder, onChangeFunction, searchRef }) => (
	<Header>
		<h1>{title}</h1>
		<input
			placeholder={placeholder}
			onChange={onChangeFunction}
			ref={searchRef}
		/>
	</Header>
);

export default PageHeader;
