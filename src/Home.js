import React, { Component } from 'react';
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
        <p>
          Todo: [Documentation]
        </p>
      </div>
    );
  }
}

export default withErrorHandler(Home);
