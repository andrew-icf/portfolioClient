import React, { Component } from 'react';

export default class Briebug extends Component {
  render() {
    return (
      <div>
        <h3>BrieBug Solutions</h3>
        <div className='briebug'>
          <p>These are projects that I worked on when I was at Briebug Solutions</p>
          <table>
            <tr>
              <th><img src='../../img/Briebug.png' /></th>
              <th><img src='../../img/nextplane.png' /></th>
              <th><img src='../../img/rme.png' /></th>
              <th><img src='../../img/streetsweep.png' /></th>
              <th><img src='../../img/sizet.png' /></th>
            </tr>
            <tr>
              <td><p>I worked with general fixes and updates within the company.</p></td>
              <td><p>I worked with general fixes and updates within the company.</p></td>
              <td><p>I worked with general fixes and updates within the company.</p></td>
              <td><p>I worked with general fixes and updates within the company.</p></td>
              <td><p>I worked with general fixes and updates within the company.</p></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
