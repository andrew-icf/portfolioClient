import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Footer extends Component {
    render () {
        return (
            <div>
                <footer>
                    <div className="footer" id="footer">
                        <h3>Andrew van der Meer</h3>
                        <h5>957 Newton St</h5>
                        <h5>Denver, CO 80204</h5>
                        <h5>(970) 319-6126</h5>
                        <a href='https://www.linkedin.com/in/andrew-icf' target="_blank">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        <a href='https://github.com/andrew-icf' target="_blank">
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
