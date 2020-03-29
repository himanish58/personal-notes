import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import RedirectionButton from './Button';
import SpendHistory from './SpendHistory';
import Contacts from './Contacts';

const HomepageContainer = styled.div`
	height: 200px;
	margin-top: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Homepage = () => {
	const [redirectionPath, setRedirectionPath] = useState('');

	if (redirectionPath) {
		console.log({ redirectionPath });
		return (
			<Router>
				<Route path="spend-history" component={SpendHistory} />
				<Route path="contacts" component={Contacts} />
				<Redirect to="spend-history" />
			</Router>
		);
	}

	return (
		<HomepageContainer>
			<RedirectionButton
				label="Spend History"
				onClickFunction={() => setRedirectionPath('spend-history')}
			/>
			<RedirectionButton
				label="Client Contacts"
				onClickFunction={() => setRedirectionPath('contacts')}
			/>
		</HomepageContainer>
	);
};

export default Homepage;
