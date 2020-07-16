import React from 'react';
import './App.scss';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ToS from './pages/ToS';
import Marketplace from './pages/Marketplace';
import Error from './pages/Error';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/kontakt/' component={Contact} />
				<Route exact path='/o-nas/' component={AboutUs} />
				<Route exact path='/regulamin/' component={ToS} />
				<Route exact path='/sprzedaj/' component={Marketplace} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
