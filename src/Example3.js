import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Author extends Component {
  render() {
    return (
      <div className='page-example3'>
        <h1 className="App-title">Runtime error handling</h1>
        <p>This component throws an error when data handled is not expected by the component logic.</p>
      </div>
    );
  }
}

export default Author;
