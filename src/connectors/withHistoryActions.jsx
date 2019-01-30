import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { historyPush, historyReplace, historyPop } from '@shopgate/pwa-common/actions/router';

// eslint-ignore-next-line require-jsdoc
class WithHistoryActions extends Component {
  static propTypes = {
    historyPop: PropTypes.func.isRequired,
    historyPush: PropTypes.func.isRequired,
    historyReplace: PropTypes.func.isRequired,
    WrappedComponent: PropTypes.func.isRequired,
    otherProps: PropTypes.shape({}),
  }

  static defaultProps = {
    otherProps: {},
  }

  handlePush = (pathname) => {
    this.props.historyPush({ pathname });
  }

  handleReplace = (pathname) => {
    this.props.historyReplace({ pathname });
  }

  handlePop = () => {
    this.props.historyPop();
  }

  /**
   * @inheritDoc
   */
  render() {
    const { WrappedComponent, otherProps } = this.props;
    return (
      <WrappedComponent
        historyPop={this.handlePop}
        historyPush={this.handlePush}
        historyReplace={this.handleReplace}
        {...otherProps}
      />
    );
  }
}

const mapDispatchToProps = {
  historyPush,
  historyPop,
  historyReplace,
};

const Connected = connect(null, mapDispatchToProps)(WithHistoryActions);

export default WrappedComponent => props =>
  <Connected WrappedComponent={WrappedComponent} otherProps={props} />;
