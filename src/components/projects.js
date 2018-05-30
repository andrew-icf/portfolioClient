import React, { Component } from 'react';

import Weather from '../weather/weather';
import Briebug from './briebug';
import Blndspt from './blndspt';

export default class Projects extends Component {
  render() {
    return(
      <div>
        <h1 className="mainHeader">Projects</h1>
        <Blndspt />
        <Briebug />
        <Weather />
      </div>
    );
  }
}
