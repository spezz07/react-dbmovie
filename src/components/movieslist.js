import React from 'react'
import '../style/movielist.scss'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { getIndexMovieData } from '../store/action'
import Loading from './loading'
import { Link } from 'react-router-dom'

/* 此处为UI组件 */
const MovieSubjects = (props) => {
  return (
    <div>
      <li className='movie-item'>
        <div className='movie-item-content'>
          <img src={props.data.images.large} alt=""/>
          <div className='movie-item-subjects'>
            <Link to ={`/detail/${props.data.id}`}> <h3 className='movie-item-subjects-title'>{props.data.title}</h3></Link>
            <Link to ={`/detail/${props.data.id}`}> <h4 className='movie-item-subjects-origintitle'>{props.data.original_title}</h4></Link>
            <div className='movie-item-subjects-duration'>时长:{props.data.durations}</div>
            <div className='movie-item-subjects-ranking'><Icon type="like"style={{ color: '#f6e65b' }} /><span>{props.data.rating.average}/</span>10</div>
            <div className='movie-item-subjects-year'>{props.data.year}年上映</div>
            <div className='movie-item-subjects-genres'>{props.data.genres.map((i, index) => {
              return (<span key={index}>{i}/</span>)
            })}</div>
            <div className='movie-item-subjects-directors'>导演：{props.data.directors.map((i, index) => {
              return (<span key={index}>{i.name}</span>)
            })}</div>
            <div className='movie-item-subjects-casts'>主演: {props.data.casts.map((i, index) => {
              return (<span key={index}>{i.name}</span>)
            })}</div>
          </div>
        </div>
        <img src={props.data.images.large} alt="" className='item-bg'/>
      </li>
    </div>
  )
}

class MovieList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      isLoading: true
    }
  }
  componentWillMount () {
    this.props.getmovielist()
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      list: nextProps.list.subjects,
      isLoading: false
    })
  }
  render () {
    return (
      <div>
        <Loading isLoading={this.state.isLoading}/>
        <ul className='movie-container'>
          { this.state.list.map((i, index) => (<MovieSubjects key={index} data={i}/>))}
        </ul>
      </div>
    )
  }
}

/* 分发state和dispatch */
const mapStateMovieList = (state) => {
  return {
    list: state.movielist
  }
}
const mapDispathMoiesList = (dispatch) => {
  return {
    getmovielist: () => {
      dispatch(getIndexMovieData())
    }
  }
}

const MovieListContainer = connect(
  mapStateMovieList,
  mapDispathMoiesList
)(MovieList)

export default MovieListContainer
