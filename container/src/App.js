import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App1 from './components/App1';
import App2 from './components/App2';
import Header from './components/Header';

export default () => {
	return (
		<BrowserRouter>
		<div>
			<Header />
			{/* <Switch>
				<Route path="/app2" component={App2}/>
				<Route path="/" component={App1}/>
			</Switch> */}
			<App1 />
			<hr/>
			<App2 />
		</div>
		</BrowserRouter>
	);
};
