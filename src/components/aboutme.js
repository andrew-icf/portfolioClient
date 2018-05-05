import React, { Component } from 'react';

export default class Aboutme extends Component {
    render () {
        return (
            <div>
                <div className="aboutme"><h1>About me</h1></div>
                <div className="aboutMeCard">
                    <h3>Travel</h3>
                    <p>Traveling is the most amazing thing I've ever experieced. Throwing myself in an unfamiliar place with no idea of what anything is, and experiencing that cutlure, helps me grow, learn and discover more about myself than I ever thought possible. </p>
                    <img src="../../img/icelandJulian.jpg" />
                </div>
                <div className="aboutMeCard">
                    <h3>Family</h3>
                    <p>I wouldn't be where I am today without the support and love of my family and friends.  </p>
                    <img src="../../img/dadandI.jpg" />
                    <img src="../../img/kona.jpg" />
                </div>
                <div className="aboutMeCard">
                    <h3>Fitness</h3>
                    <p>I really like to stay active. I regularly do Crossfit and I enjoy running and hiking. I also keep my mind sharp with meditation and reading.</p>
                    <img src="../../img/crossfit.png" />
                </div>
            </div>
        );
    }
}
