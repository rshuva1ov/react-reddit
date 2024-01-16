import React from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { AppComponent } from './shared/AppComponent';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
