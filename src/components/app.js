import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import Projects from './projects'
import PageNotFound from './pageNotFound';

export default class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar className='wholeScreen' />
                <div>
                    <Switch>
                        <Route path='/' component={ Home } exact={true} />
                        <Route path='/projects' component={ Projects } exact={true} />
                        <Route component={ PageNotFound } exact={true} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}
