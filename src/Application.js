import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';
import Home from './modules/home/containers/Home';
// import Calculator from './modules/calculator/containers/Calculator';
//import store from './redux/store';

export const createdStore = createStore(reducer);

class Application extends Component {
  render() {
    return (
      <Provider store={createdStore}>
          <Home />
      </Provider>
    );
  }
}

export default Application;
