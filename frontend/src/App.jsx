import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import SpendHistory from './Components/SpendHistory';
import Contacts from './Components/Contacts';

function App() {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));

	const toggleLogin = () => {
		if (localStorage.getItem('loggedIn')) {
			localStorage.clear();
			setLoggedIn(false);
		} else {
			localStorage.setItem('loggedIn', true);
			setLoggedIn(true);
		}
	};

	if (!loggedIn) {
		return (
			<>
				<Header />
				<Router>
					<Route
						path="/login"
						render={() => <Login loggedIn={loggedIn} login={toggleLogin} />}
					/>
					<Redirect to="/login" />
				</Router>
			</>
		);
	}

	return (
		<>
			<Header loggedIn={loggedIn} logout={toggleLogin} />
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/spend-history" component={SpendHistory} />
					<Route path="/contacts" component={Contacts} />
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
