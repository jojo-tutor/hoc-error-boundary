import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Author from './Author';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Author path='/author' component={Author}/>
      </Switch>
    );
  }
}

export default App;
