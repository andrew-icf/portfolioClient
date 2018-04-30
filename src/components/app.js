import React, { Component } from 'react';
import Navbar from './navbar.js';
import HeaderImg from './headerImg';

export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <HeaderImg />
        </div>
    );
  }
}
