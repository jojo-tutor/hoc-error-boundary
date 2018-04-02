import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import withErrorHandler from './withErrorHandler';

import logo from './logo.svg';
import './App.css';

class Example3 extends Component {
  state = {
    person: {
      name: 'John Doe',
      age: 100,
      gender: 'Male'
    }
  }
  handleClick = () => {
    this.setState({ person: null })
  }
  render() {
    const { name, age, gender } = this.state.person
    return (
      <div className='page-example3'>
        <h1 className="App-title">Runtime error handling</h1>
        <p>This component throws an error when data handled is not expected by the component logic.</p>
        <p>Person Details: </p>
        <p>Name: { name }</p>
        <p>Age: { age }</p>
        <p>Gender: { gender }</p>
        <button onClick={this.handleClick}>Fetch next record</button>
      </div>
    );
  }
}

export default withErrorHandler(Example3)
