import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
        <h1 className="App-title">Home</h1>
    );
  }
}

export default Home;
