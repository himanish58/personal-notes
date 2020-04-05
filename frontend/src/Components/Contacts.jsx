import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ContactBox from './ContactBox';
import PageHeader from './PageHeader';
import getContacts from '../requests/contacts';

const Contact = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Contacts = () => {
	const [contacts, setContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);
	const contactSearchRef = useRef();
	useEffect(() => {
		(async () => {
			const response = await getContacts();
			if (response.status === 200) {
				setContacts(response.data);
				setFilteredContacts(response.data);
			} else {
				console.error(`Error in Contacts.useEffect.getContacts: ${response}`);
			}
		})();
	}, []);
	const searchContacts = () => {
		const {
			current: { value },
		} = contactSearchRef;
		const modifiedContacts = contacts.filter(
			({ name, address }) =>
				name.toLowerCase().includes(value.trim().toLowerCase()) ||
				address.toLowerCase().includes(value.trim().toLowerCase()),
		);
		setFilteredContacts(modifiedContacts);
	};

	return (
		<Contact>
			<PageHeader
				title="Client Contacts Management"
				placeholder="Search Contacts..."
				onChangeFunction={searchContacts}
				searchRef={contactSearchRef}
			/>
			{filteredContacts.map(({ id, name, phone, email, address, company }) => (
				<ContactBox
					key={id}
					name={name}
					phone={phone}
					email={email}
					address={address}
					company={company}
				/>
			))}
		</Contact>
	);
};

export default Contacts;
