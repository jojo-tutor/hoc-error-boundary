import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WithError from './WithError';

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
      <div>
        <h1 className="App-title">Home</h1>
        <button onClick={this.handleClick}>Throw Error</button>
      </div>
    );
  }
}

export default WithError(Home);
