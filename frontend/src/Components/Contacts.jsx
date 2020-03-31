import React from 'react';
import styled from 'styled-components';

const Contact = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Box = styled.div`
	min-height: 200px;
	width: 50%;
	margin: 16px;
	padding: 16px;
	background: #ffffff;
`;

const Contacts = () => (
	<Contact>
		<h1>Contacts</h1>
		{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
			<Box />
		))}
	</Contact>
);

export default Contacts;
