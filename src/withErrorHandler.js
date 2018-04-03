import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ErrorHandler from './ErrorHandler'

const withErrorHandler = (ChildComponent, onError, errorElement) => props => {
  console.log('props: ', props);
  return (
    <ErrorHandler>
      <ChildComponent/>
    </ErrorHandler>
  )
}

export default withErrorHandler
