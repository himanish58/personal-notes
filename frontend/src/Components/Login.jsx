import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './Homepage';
import LoginButton from './Button';

const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	margin-top: 100px;
	flex-direction: column;
	color: #1ba94c;

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

const Login = ({ loggedIn, login }) => {
	const usernameRef = useRef();
	const passwordRef = useRef();
	const [disableLogin, toggleDisableLogin] = useState(true);

	const setDisableLogin = () => {
		toggleDisableLogin(
			!(usernameRef.current.value && passwordRef.current.value),
		);
	};

	if (loggedIn) {
		return (
			<Router>
				<Route exact path="/" component={HomePage} />
				<Redirect to="/" />
			</Router>
		);
	}

	return (
		<LoginContainer>
			<h1>Login</h1>
			<input
				type="text"
				ref={usernameRef}
				placeholder="Username"
				onChange={setDisableLogin}
			/>
			<input
				type="password"
				ref={passwordRef}
				placeholder="Password"
				onChange={setDisableLogin}
			/>
			<LoginButton
				label="Login"
				onClickFunction={login}
				disable={disableLogin}
			/>
		</LoginContainer>
	);
};

export default Login;
