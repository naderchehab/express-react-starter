import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import MyContainer from './components/MyContainer/MyContainer';
import Provider from './components/Provider';
import reducers from './reducers';

const App = () =>
  <Provider store={createStore(reducers)}>
    <MyContainer />
  </Provider>;

ReactDOM.render(<App />, document.getElementById('app'));
