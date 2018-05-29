import React, { Component } from 'react';
import Weather from '../weather/weather';

export default class Projects extends Component {
  render() {
    return(
      <div>
        <div className='projects'>
          <h1 className="mainHeader">Projects</h1>
          <h3>BrieBug Solutions</h3>
          <section>
            <p>These are projects that I worked on when I was at Briebug Solutions</p>
            <article>
              <img src='../../img/Briebug.png' />
              <p>I worked with general fixes and updates within the company.</p>
            </article>
            <article>
              <img src='../../img/nextplane.png' />
              <p>I worked with general fixes and updates within the company.</p>
            </article>
            <article>
              <img src='../../img/rme.png' />
              <p>I worked with general fixes and updates within the company.</p>
            </article>
            <article>
              <img src='../../img/streetsweep.png' />
              <p>I worked with general fixes and updates within the company.</p>
            </article>
            <article>
              <img src='../../img/sizet.png' />
              <p>I worked with general fixes and updates within the company.</p>
            </article>
          </section>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    );
  }
}
