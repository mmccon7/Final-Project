import React from 'react';
import { IndexRoute, Router, route, hashHistory } from 'react-router';
import Home from './contaner/Home';
import App from './containers/App';
export default (
<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
	
		</Router


	

	