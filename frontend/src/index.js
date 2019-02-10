import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import history from './history'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainRouterSettingLayoutPage from './components/pages/MainRouterSettingLayoutPage'

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Router>
        <Switch>
          <Route
            path='/'
            component={ MainRouterSettingLayoutPage }
          />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()