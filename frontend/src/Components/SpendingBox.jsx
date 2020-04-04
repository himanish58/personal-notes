import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	background: #ffffff;
	margin: 16px;
	padding: 16px;
`;

const SpendingBox = ({ id, merchant, date, amount }) => (
	<Container>
		<h1>{merchant}</h1>
		<h4>Transaction ID : {id}</h4>
		<h4>Amount(USD) : {amount}</h4>
		<h4>Date : {date}</h4>
	</Container>
);

export default SpendingBox;
