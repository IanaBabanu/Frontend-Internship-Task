// Core
import { compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers =
  process.env.NODE_ENV === 'development' && devtools ? devtools : compose

export { thunkMiddleware, composeEnhancers }