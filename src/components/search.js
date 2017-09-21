import React from 'react'
import '../style/search.scss'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import Loading from './loading'
import { Link } from 'react-router-dom'
import { getSearch } from '../store/action'
import { withRouter } from 'react-router'

const SearchSubjects = (props) => {
  return (
    <div>
      <li className='search-item'>
        <div className='search-item-content'>
          <img src={props.data.images.large} alt=""/>
          <div className='search-item-subjects'>
            <Link to ={`/detail/${props.data.id}`}> <h3 className='search-item-subjects-title'>{props.data.title}</h3></Link>
            <Link to ={`/detail/${props.data.id}`}> <h4 className='search-item-subjects-origintitle'>{props.data.original_title}</h4></Link>
            <div className='search-item-subjects-duration'>时长:{props.data.durations}</div>
            <div className='search-item-subjects-ranking'><Icon type="like"style={{ color: '#f6e65b' }} /><span>{props.data.rating.average}/</span>10</div>
            <div className='search-item-subjects-year'>{props.data.year}年上映</div>
            <div className='search-item-subjects-genres'>{props.data.genres.map((i, index) => {
              return (<span key={index}>{i}/</span>)
            })}</div>
            <div className='search-item-subjects-directors'>导演：{props.data.directors.map((i, index) => {
              return (<span key={index}><Link to={`/celebrity/${i.id}`}>{i.name}</Link></span>)
            })}</div>
            <div className='search-item-subjects-casts'>主演: {props.data.casts.map((i, index) => {
              return (<span key={index}><Link to={`/celebrity/${i.id}`}>{i.name}</Link></span>)
            })}</div>
          </div>
        </div>
        <img src={props.data.images.large} alt="" className='item-bg'/>
      </li>
    </div>
  )
}

class SearchList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      isLoading: true
    }
  }
  componentWillMount (props) {
    const { match, location } = this.props
    this.props.getsearchlist(match.params.content, location.search.slice(1))
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
        <ul className='search-container'>
          { this.state.list.map((i, index) => (<SearchSubjects key={index} data={i}/>))}
        </ul>
      </div>
    )
  }
}

/* 分发state和dispatch */
const mapStateSearchList = (state) => {
  return {
    list: state.searchlist
  }
}
const mapDispathSearchList = (dispatch) => {
  return {
    getsearchlist: (v, t) => {
      dispatch(getSearch(v, t))
    }
  }
}

const SearchListContainer = connect(
  mapStateSearchList,
  mapDispathSearchList
)(withRouter(SearchList))

export default SearchListContainer
