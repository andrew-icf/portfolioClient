import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/'>Andrew Vandermeer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link">About Me<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/projects' className="nav-link">Projects</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#footer">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="../../static/AndrewVandermeerResume.pdf" target='_blank'><strong>Download Resume</strong></a>
                  </li>
                </ul>
                </div>
            </nav>
        );
    }
}
