import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { forbiddenWordsMiddleware } from '../middlewares'

// createStore takes a reducer as the first argument
const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, thunk)
  )

export default store
