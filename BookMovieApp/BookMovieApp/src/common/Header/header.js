import React, { Component } from 'react';
import logo from './logo.svg';
import '../stylesheets/header.css';

class App extends Component {
    render() {
        return (
            <div className="header">
                <div className="head-header">
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Welcome to Movie Booking</h2>
                </div>
            </div>
        );
    }
}

export default header;
