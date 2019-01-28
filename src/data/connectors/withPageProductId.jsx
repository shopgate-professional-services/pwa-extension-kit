import React, { Component } from 'react';
import { RouteContext } from '@shopgate/pwa-common/context';
import { hex2bin, bin2hex } from '@shopgate/pwa-common/helpers/data';

class WithPageProductId extends Component {
  render() {
    const { WrappedComponent, ...otherProps } = this.props;

    return (
      <RouteContext.Consumer>
       { ({ params }) => <WrappedComponent productId={hex2bin(params.productId)} {...otherProps} /> }
      </RouteContext.Consumer>
    );

  }
}

/**
 * Returns a Wrapped Component with automatic props.productId read from RouteContext.
 * @param {function} WrappedComponent
 * @returns {function} React component.
 */
const withPageProductId = WrappedComponent => props =>
  <WithPageProductId WrappedComponent={WrappedComponent} {...props} />;

export default withPageProductId;
