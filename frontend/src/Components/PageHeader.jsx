import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	align-items: center;

	input {
		border: 0;
		border-bottom: 1px solid #1ba94c;
		width: 300px;
		padding: 10px;
		margin: 16px 0;
		font-size: 16px;
		font-family: 'Roboto';
		background: #e7eeef;

		&::placeholder {
			color: #1ba94c;
		}
	}
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
