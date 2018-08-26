import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withErrorHandler } from 'react-error-handler';
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
        <h1 className="App-title">
          React Error Handler
        </h1>
        <p><Link to='/example1'>Example 1</Link></p>
        <p><Link to='/example2'>Example 2</Link></p>
        <p><Link to='/example3'>Example 3</Link></p>
      </div>
    );
  }
}

export default withErrorHandler(Home);
