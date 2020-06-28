import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './rootReducer'
import { composeEnhancers, thunkMiddleware } from './middleware'

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

export default store