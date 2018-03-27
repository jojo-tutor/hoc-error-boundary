import React, { Component } from 'react';
import WithError from './WithError';

import logo from './logo.svg';
import './App.css';

const FunctionalComponent1 = ({ counter }) => {
  if (counter >= 1) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      <div className='title'>Functional Component 1</div>
      <p className='description'>This will throw an error when Counter is >= 1.</p>
    </div>)
}

const FunctionalComponent2 = ({ counter }) => {
  if (counter >= 2) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      <div className='title'>Functional Component 2</div>
      <p className='description'>This will throw an error when Counter is >= 2.</p>
    </div>)
}

const FunctionalComponent3 = ({ counter }) => {
  if (counter >= 3) {
    throw new Error('Expected Error!')
  }
  return (
    <div className='mini'>
      <div className='title'>Functional Component 3</div>
      <p className='description'>This will throw an error when Counter is >= 3.</p>
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
    const WrappedFunctional1 = WithError(FunctionalComponent1)
    const WrappedFunctional2 = WithError(FunctionalComponent2)
    const WrappedFunctional3 = WithError(FunctionalComponent3)
    const { counter } = this.state
    return (
      <div className='page-example2'>
        <h1 className="App-title">Functional or Dumb Components</h1>
        <button onClick={this.handleIncrement}>Increment Counter</button>
        <p>Counter: { counter }</p>
        <WrappedFunctional1 counter={counter} />
        <WrappedFunctional2 counter={counter} />
        <WrappedFunctional3 counter={counter} />
      </div>
    );
  }
}

export default About;
