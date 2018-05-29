import React, { Component } from 'react';
import Aboutme from './aboutme';
import HeaderImg from './headerImg';

export default class Home extends Component {
  render () {
    return (
      <div>
        <HeaderImg className='wholeScreen' />
        <Aboutme />
      </div>
    );
  }
}
