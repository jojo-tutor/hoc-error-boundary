import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

const Header = ({ match, children }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <ul className='navigation-buttons'>
            <li className={match.path === '/' ? 'active' : ''}><Link to='/'>Home</Link></li>
            <li className={match.path === '/example1' ? 'active' : ''}><Link to='/example1'>Example 1</Link></li>
            <li className={match.path === '/example2' ? 'active' : ''}><Link to='/example2'>Example 2</Link></li>
            <li className={match.path === '/example3' ? 'active' : ''}><Link to='/example3'>Example 3</Link></li>
          </ul>
        </nav>
      </header>
      <div className='content'>
        { children }
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (<Header {...props}><Home/></Header>)} />
        <Route exact path='/example1' render={(props) => (<Header {...props}><Example1/></Header>)} />
        <Route path='/example2' render={(props) => (<Header {...props}><Example2/></Header>)} />
        <Route path='/example3' render={(props) => (<Header {...props}><Example3/></Header>)} />
      </Switch>
    );
  }
}

export default App;
