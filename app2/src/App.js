import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Rewards from './components/rewards/Rewards';

export default ({ history }) => {
	return (
		<div>
			<StylesProvider>
				<Router history={history}>
					<Switch>
						<Route path="/" component={Rewards} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};

