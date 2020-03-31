import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import RedirectionButton from './Button';

const HomepageContainer = styled.div`
	height: 200px;
	margin-top: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Homepage = () => {
	const [redirectionPath, setRedirectionPath] = useState('');

	if (redirectionPath) return <Redirect to={redirectionPath} />;

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
