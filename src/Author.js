import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Author extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul id="buttons">
            <li><Link to={`/roster/`}>Author</Link></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">JOIN</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Author;
