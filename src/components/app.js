import React, { Component } from 'react';
import Navbar from './navbar.js';
import HeaderImg from './headerImg';
import Aboutme from './aboutme';
import Footer from '../containers/footer';

export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <HeaderImg />
            <Aboutme />
            <Footer />
        </div>
    );
  }
}
