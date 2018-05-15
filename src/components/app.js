import React, { Component } from 'react';

import Navbar from './navbar.js';
import HeaderImg from './headerImg';
import Aboutme from './aboutme';
import Footer from './footer';
import Weather from '../weather/weather';

export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <HeaderImg />
            <Aboutme />
            <Footer />
            <Weather />
        </div>
    );
  }
}
