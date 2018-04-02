import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import withErrorHandler from './withErrorHandler';

import logo from './logo.svg';
import './App.css';

class Home extends Component {
  state = {}
  handleClick = () => {
    this.setState({ count: true })
  }
  render() {
    if (this.state.count) {
      throw new Error('Unexpected Error!')
    }
    return (
      <h1 className="App-title">Home</h1>
    );
  }
}

export default withErrorHandler(Home);
