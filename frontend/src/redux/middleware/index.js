import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({})

export default composeEnhancers(
  applyMiddleware(thunk, logger)
)