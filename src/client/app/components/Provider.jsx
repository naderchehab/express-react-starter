import React, { Component } from 'react';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.propTypes = {
  store: React.PropTypes.object,
  children: React.PropTypes.object,
};

Provider.childContextTypes = {
  store: React.PropTypes.object,
};

export default Provider;
