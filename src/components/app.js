import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './navbar.js';
import HeaderImg from './headerImg';
import Aboutme from './aboutme';
import Footer from './footer';
import Weather from '../weather/weather';

export default class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar className='wholeScreen' />
                <HeaderImg className='wholeScreen' />
                <div>
                    <Switch>
                        <Route path='/' component={ Aboutme } exact={true} />
                        <Route path='/projects' component={ Weather } exact={true} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}
