import React, { Component } from 'react';

export default class Aboutme extends Component {
    render () {
        return (
            <div>
                <h1 className="mainHeader">About Me</h1>
                <div className="aboutMeCard">
                    <h3>Travel</h3>
                    <p>Traveling is the most amazing thing I've ever experieced. Throwing myself in an unfamiliar place with no idea of what anything is, and experiencing that cutlure, helps me grow, learn and discover more about myself than I ever thought possible. </p>
                    <img src="../../img/travel.jpg" />
                </div>
                <div className="aboutMeCard">
                    <h3>Family</h3>
                    <p>"I wouldn't be where I am today without the support and love of my family and friends."</p>
                    <img src="../../img/famjam.jpg" />
                </div>
                <div className="aboutMeCard">
                    <h3>Fitness</h3>
                    <p>I really like to stay active. I regularly do Crossfit and I enjoy running and hiking. I also keep my mind sharp with meditation and reading.</p>
                    <img src="../../img/workout.jpg" />
                </div>
                <div className="aboutMeCard">
                    <h3>and of course... CODE!</h3>
                    <p>"I never thought I would find something in which I could  challenge my mind and give me the opportunity to be creative. The people that I've met and the teams I have worked on I wouldn't change for the world. Bring on the challenge and let's build something that people can use!"</p>
                    <img src="../../img/code.jpg" />
                </div>
            </div>
        );
    }
}
