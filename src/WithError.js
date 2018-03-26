import React, { PureComponent, Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function WithError(ChildComponent) {
  return class extends PureComponent {
    state = {}
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      console.warn(error, info);
    }
    render() {
      if (this.state.hasError) {
        return (<Fragment>
          <h1>Oh no, Something went wrong! :(</h1>
          <Link to='/'>Go to Home</Link>
        </Fragment>)
      }
      return <ChildComponent/>
    }
  }
}

export default WithError
