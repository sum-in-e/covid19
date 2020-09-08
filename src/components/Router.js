import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import home from '../routes/Home';
import about from '../routes/About';
import dashboard from '../routes/Dashboard';

export default () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact component={home} />
				<Route path="/about" component={about} />
				<Route path="/dashboard" component={dashboard} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
