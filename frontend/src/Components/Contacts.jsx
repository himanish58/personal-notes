import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getContacts from '../requests/contacts';

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

const Contacts = () => {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await getContacts();
			if (response.status === 200) setContacts(response.data);
			else {
				console.error(`Error in Contacts.useEffect.getContacts: ${response}`);
			}
		})();
	}, []);

	return (
		<Contact>
			<h1>Contacts</h1>
			{contacts.map((contact) => (
				<Box key={contact.id} />
			))}
		</Contact>
	);
};

export default Contacts;
