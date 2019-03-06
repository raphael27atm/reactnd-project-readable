import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import root app
import App from './containers/App';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route
          path='/'
          component={ App }
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)