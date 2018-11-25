import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Home from './home';
import About from './aboutus';
import Contact from './contact';
import Products from './products';
import Write from './write';
import Experience from './experience';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/home" component={Home} />
		<Route path="/products" component={Products} />
		<Route path="/contact" component={Contact} />
		<Route path="/aboutus" component={About} />
		<Route path="/write" component={Write} />
		<Route path="/experience" component={Experience} />
	</Switch>
)

export default Main;