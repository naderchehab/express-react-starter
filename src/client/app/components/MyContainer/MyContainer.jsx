import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from './myContainer.scss';
import MyButton from '../MyButton/MyButton';

class MyContainer extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate(),
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    const { value } = state;
    return (
      <div className={theme.container}>
        <AppBar title="Hello World!" leftIcon="menu" />
        <div>{value}</div>
        <MyButton />
      </div>
    );
  }
}

MyContainer.contextTypes = {
  store: React.PropTypes.object,
};

export default MyContainer;
