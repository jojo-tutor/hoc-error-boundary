import React, { Component } from 'react';
import { withErrorHandler } from 'react-error-handler';
import './App.css';

class Example1 extends Component {
  state = {}
  handleClick = () => {
    this.setState({ count: true })
  }
  render() {
    if (this.state.count) {
      throw new Error('Unexpected Error!')
    }
    return (
      <div className='page-example1'>
        <h1 className="App-title">Container, Smart or Class-based Component</h1>
        <p className="App-description">This whole component is wrapped with the higher order function that handles the error.</p>
        <p className="App-instruction">Click the button below to throw error programmatically.</p>
        <button onClick={this.handleClick}>Throw Error</button>
      </div>
    );
  }
}

export default withErrorHandler(Example1);
