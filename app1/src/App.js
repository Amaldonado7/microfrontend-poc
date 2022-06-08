import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Second from "./components/Second";


export default ({ history }) => {
	return (
		<div>
			<StylesProvider>
				<Router history={history}>
					<Switch>
						<Route exact path="/second" component={Second} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
