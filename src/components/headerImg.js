import React, { Component } from 'react';

export default class HeaderImg extends Component {
    render () {
        return (
            <div className="header">
                <img className="mtns" src="../../img/mtns.jpeg" />
                <img className="headShot" src="../../img/headShot.png" />
            </div>
        )
    }
}
