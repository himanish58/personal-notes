import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import SpendHistory from './Components/SpendHistory';
import Contacts from './Components/Contacts';

function App() {
	const loggedIn = localStorage.getItem('loggedIn');

	if (!loggedIn) {
		return (
			<Router>
				<Route path="/login" component={Login} />
				<Redirect to="/login" />
			</Router>
		);
	}

	return (
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
	);
}

export default App;
