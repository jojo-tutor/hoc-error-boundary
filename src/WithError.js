import React, { PureComponent, Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function WithError(ChildComponent) {
  return class extends PureComponent {
    render() {
      return ChildComponent
    }
  }
}
