import React, { Component, createContext } from 'react';

export const Data = createContext();

export default class DataContext extends Component {
    state = {
        name: 'Arun',
        schno: '171112031'
    }

    render() {
        return (
            <Data.Provider value={{ ...this.state }}>
                {this.props.children}
            </Data.Provider>
        );
    }
}
