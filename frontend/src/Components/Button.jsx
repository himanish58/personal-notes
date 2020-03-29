import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
	background: #1ba94c;
	color: #f5f5f5;
	min-width: 200px;
	font-size: 20px;
	margin: 16px;
	padding: 12px;
	border-radius: 4px;

	&:disabled {
		background: gray;
	}
`;

const Button = ({ label, onClickFunction, disable }) => (
	<CustomButton onClick={onClickFunction} disabled={disable}>
		{label}
	</CustomButton>
);

export default Button;
