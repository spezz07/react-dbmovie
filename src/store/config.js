import { createStore, combineReducers, applyMiddleware } from 'Redux'
import { movielist, moviedetail, searchlist } from './reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({
    movielist,
    moviedetail,
    searchlist
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store
