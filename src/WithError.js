import React, { PureComponent } from 'react';

function WithError(ChildComponent) {
  return class extends PureComponent {
    state = {}
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      console.warn(error, info);
    }
    render() {
      if (this.state.hasError) {
        return (<h1>Oh no, Something went wrong! :(</h1>)
      }
      return <ChildComponent/>
    }
  }
}

export default WithError
