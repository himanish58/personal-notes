import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomButton = styled.button`
	background: #1ba94c;
	color: #f5f5f5;
	min-width: ${(props) => (props.children === 'Logout' ? '100px' : '160px')};
	font-size: ${(props) => (props.children === 'Logout' ? '16px' : '20px')};
	margin: 16px;
	padding: ${(props) => (props.children === 'Logout' ? '8px' : '12px')};
	border: 0;
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

Button.propTypes = {
	label: PropTypes.string,
	onClickFunction: PropTypes.func,
	disable: PropTypes.bool,
};

export default Button;
