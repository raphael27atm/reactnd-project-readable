import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import root app
import App from './containers/App';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)