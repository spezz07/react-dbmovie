import {
  GET_INDEX_MOVIE_DATA,
  GET_MOVIE_DETAIL_DATA,
  GET_SEARCH_RESULT,
  GET_CELEBRITY_DATA
} from './action'

const initState = {
  moivelist: {},
  moviedetail: {},
  searchlist: {},
  celebritylist: {}
}

export const movielist = (state = initState.moivelist, action) => {
  switch (action.type) {
    case GET_INDEX_MOVIE_DATA:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export const moviedetail = (state = initState.moviedetail, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL_DATA:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export const searchlist = (state = initState.searchlist, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export const celebritylist = (state = initState.celebritylist, action) => {
  switch (action.type) {
    case GET_CELEBRITY_DATA:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
