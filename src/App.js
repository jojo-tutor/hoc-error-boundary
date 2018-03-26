import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Author from './Author';

const Header = ({ match, children }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ul className='navigation-buttons'>
          <li className={match.path === '/' ? 'active' : ''}><Link to='/'>HOME</Link></li>
          <li className={match.path === '/about' ? 'active' : ''}><Link to='/about'>ABOUT</Link></li>
          <li className={match.path === '/author' ? 'active' : ''}><Link to='/author'>AUTHOR</Link></li>
        </ul>
      </header>
      { children }
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (<Header {...props}>Home</Header>)} />
        <Route path='/about' render={(props) => (<Header {...props}>About</Header>)} />
        <Route path='/author' render={(props) => (<Header {...props}>Author</Header>)} />
      </Switch>
    );
  }
}

export default App;
