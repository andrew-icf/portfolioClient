import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Footer extends Component {
    render () {
        return (
            <div>
                <footer>
                    <div className="footer">
                        <h5>Andrew Vandermeer</h5>
                        <h6>957 Newton St</h6>
                        <h6>Denver, CO 80204</h6>
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
