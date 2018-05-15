import React, { Component } from 'react';

import SearchBar from './search_bar';

export default class Weather extends Component {
    render () {
        return (
            <div>
                <h3>Weather App</h3>
                <SearchBar />
            </div>
        );
    }
}
