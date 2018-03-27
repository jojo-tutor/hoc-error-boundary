import React, { Component } from 'react';
import WithError from './WithError';

import logo from './logo.svg';
import './App.css';

const MiniComponent1 = ({ counter }) => {
  if (counter > 0) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      Mini 1
    </div>)
}

const MiniComponent2 = ({ counter }) => {
  if (counter > 1) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      Mini 2
    </div>)
}

const MiniComponent3 = ({ counter }) => {
  if (counter > 2) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      Mini 3
    </div>)
}


class About extends Component {
  state ={
    counter: 0
  }
  handleIncrement = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }
  render() {
    const WrappedMini1 = WithError(MiniComponent1)
    const WrappedMini2 = WithError(MiniComponent2)
    const WrappedMini3 = WithError(MiniComponent3)
    const { counter } = this.state
    return (
      <div className='page-about'>
        <h1 className="App-title">About</h1>
        <button onClick={this.handleIncrement}>Increment Counter</button>
        <p>Counter: { counter }</p>
        <WrappedMini1 counter={counter} />
        <WrappedMini2 counter={counter} />
        <WrappedMini3 counter={counter} />
      </div>
    );
  }
}

export default About;
