import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log('@@componentDidCatch');
    this.setState({ hasError: true });
    console.warn(error, info);
  }

  render() {
    console.log('@Error boundary');
    if (this.state.hasError) {
      return (<Fragment>
        <h1>Oh no, Something went wrong! :(</h1>
        <Link to='/'>Go to Home</Link>
      </Fragment>)
    }
    return this.props.children;
  }
}

export default ErrorHandler;
