import React from 'react';
import ReactDOM from 'react-dom';

// Redux-related stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App';

// Reducers
import reducers from './store/reducers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
