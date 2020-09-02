import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import home from '../routes/Home';
import news from '../routes/News';
import symptoms from '../routes/Symptoms';
import dashboard from '../routes/Dashboard';

export default () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact component={home} />
				<Route path="/news" component={news} />
				<Route path="/symptoms" component={symptoms} />
				<Route path="/dashboard" component={dashboard} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
