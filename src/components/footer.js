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
                    </div>
                </footer>
            </div>
        );
    }
}
