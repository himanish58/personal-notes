import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	background: #ffffff;
	margin: 16px;
	padding: 16px;
`;

const ContactBox = ({ name, address, phone, email, company }) => (
	<Container>
		<h1>{name}</h1>
		<h4>Company Name : {company}</h4>
		<h4>Phone : {phone}</h4>
		<h4>Email : {email}</h4>
		<h4>Address : {address}</h4>
	</Container>
);

export default ContactBox;
