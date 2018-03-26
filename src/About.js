import React, { Component } from 'react';
import WithError from './WithError';

import logo from './logo.svg';
import './App.css';

const MiniComponent1 = () => {
  return (<div>Mini 1</div>)
}

const MiniComponent2 = () => {
  return (<div>Mini 2</div>)
}

const MiniComponent3 = () => {
  return (<div>Mini 3</div>)
}


class About extends Component {
  render() {
    const WrappedMini1 = WithError(MiniComponent1)
    const WrappedMini2 = WithError(MiniComponent2)
    const WrappedMini3 = WithError(MiniComponent3)
    return (
      <div>
        <h1 className="App-title">About</h1>
        <WrappedMini1/>
        <WrappedMini2/>
        <WrappedMini3/>
      </div>
    );
  }
}

export default About;
