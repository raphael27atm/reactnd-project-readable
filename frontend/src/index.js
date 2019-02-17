import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import root app
import App from './containers/App';

// Style
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CustomTheme from './styles/CustomTheme'

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider theme={ CustomTheme }>
      <Router>
        <Switch>
          <Route
            path='/'
            component={ App }
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)