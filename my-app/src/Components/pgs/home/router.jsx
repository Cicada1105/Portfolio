import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './index.jsx';

const HomeRouter = () => {
	return (
		<Switch>
			<Route exact path="/Home" render={() => <Home />} />
		</Switch>
	);
}

export default HomeRouter;