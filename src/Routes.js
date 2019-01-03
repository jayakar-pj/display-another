import React from 'react';
import {BrowserRouter ,Router, Switch, Route, Link} from 'react-router-dom';
import Show from './components/Show';
import SampleForm from './components/SampleForm';

const Routes = () => {

	<Router history={broswerHistory}>
	<div>
	<Route exact path="/" component={SampleForm} />
	<Route path="/about" component={Show} />
	</div>
	</Router>
}

export default Routes;