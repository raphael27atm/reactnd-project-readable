import middleware from './redux/middleware'
import { createStore } from 'redux'

import reducer from './redux/reducers'

const store = createStore(
  reducer,
  middleware
)

export default store