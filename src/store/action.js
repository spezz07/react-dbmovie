import axios from 'axios'
export const GET_INDEX_MOVIE_DATA = 'GET_INDEX_MOVIE_DATA'
export const GET_MOVIE_DETAIL_DATA = 'GET_MOVIE_DETAIL_DATA'
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'
export const GET_CELEBRITY_DATA = 'GET_CELEBRITY_DATA'

const api = 'https://api.douban.com/v2/movie'
const key = '0b2bdeda43b5688921839c8ecb20399b'

export const getIndexMovieData = (city = '深圳') => {
  return dispatch => {
    axios({
      method: 'get',
      url: `${api}/in_theaters?apikey=${key}&city=${city}&count=20`,
      type: 'json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((res) => {
      return dispatch({
        type: GET_INDEX_MOVIE_DATA,
        data: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
export const getMovieDetail = (city = '深圳', id = '26634179') => {
  return dispatch => {
    axios({
      method: 'get',
      url: `${api}/subject/${id}?apikey=${key}&city=${city}`,
      type: 'json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((res) => {
      return dispatch({
        type: GET_MOVIE_DETAIL_DATA,
        data: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getSearch = (content, types = 'q') => {
  return dispatch => {
    axios({
      method: 'get',
      url: `${api}/search?${types}=${content}&apikey=${key}`,
      type: 'json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((res) => {
      return dispatch({
        type: GET_SEARCH_RESULT,
        data: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getcelebrity = (id) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `${api}/celebrity/${id}?apikey=${key}`,
      type: 'json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then((res) => {
      return dispatch({
        type: GET_CELEBRITY_DATA,
        data: res.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
