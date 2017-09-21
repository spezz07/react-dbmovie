import { createStore, combineReducers, applyMiddleware } from 'Redux'
import { movielist, moviedetail, searchlist, celebritylist } from './reducer'
import createHistory from 'history/createHashHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

const history = createHistory()
const routermiddleware = routerMiddleware(history)

let store = createStore(
  combineReducers({
    movielist,
    moviedetail,
    searchlist,
    celebritylist,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, routermiddleware)
)

export default store
