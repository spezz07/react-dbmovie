import React from 'react'
import '../style/moviedetail.scss'
import { Icon, Avatar } from 'antd'
import {getMovieDetail, getSearch} from '../store/action'
import Loading from './loading'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// let setimgHeight = () => {
//   return document.body.scrollHeight + document.querySelector('.detail-container').scrollHeight - 200
// }
const defaultimg = 'https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png'

class MoiveDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      h: 0,
      data: '',
      isLoading: true
    }
  }
  componentWillMount () {
    this.props.getmoviedetail(null, this.props.match.params.id)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.list,
      isLoading: false
    })
  }
  render () {
    if (this.state.isLoading) {
      return (<Loading isLoading={this.state.isLoading}/>)
    }
    return (
      <div>
        <div className='detail-container' >
          <CoverContainer
            data={this.state.data}
            search={(content, types) => { this.props.postsearch(content, types) }}
            history={this.props.history}
          />
          <SubjectContainer data={this.state.data}/>
          <CommentContainer data={this.state.data}/>
          <img src={this.state.data.images.large} className='detail-bg'/>
        </div>
      </div>
    )
  }
}

const CoverContainer = (props) => {
  let searchTags = (content, types) => {
    props.search(content, types)
    props.history.push(
      {
        pathname: `/search/${content}`,
        search: types,
        state: types
      }
    )
  }
  return (
    <div className='cover'>
      <img src={props.data.images.large}/>
      <div className='cover-content'>
        <h3>{props.data.title}</h3>
        <h4>{props.data.original_title}</h4>
        <div className='cover-puddates'>
          上映时间：
          { props.data.pubdates.map((i, index) => (
            <span key={index}>{i}</span>
          ))}
        </div>
        <div className='cover-ranking'>评分:<Icon type="like"style={{ color: '#f6e65b', marginLeft: 10, fontSize: 24 }} /><span>{props.data.rating.average}</span>/10</div>
        <div className='cover-tags'>
          { props.data.tags.map((i, index) => (
            <span key={index} onClick={() => { searchTags(i, 'tag') }}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const SubjectContainer = (props) => {
  function summary () {
    return {__html: props.data.summary ? props.data.summary : '此电影暂无简介'}
  }
  /* let check = () => {
    props.data.casts.map((i, index) => {
      return (i) => {
        return Object.keys(i).forEach((k, index) => {
          console.log(i[k])
          if (i[k]) return i[k]
          if (k === 'avatars') {
            i[k].large = defaultimg
          } else {
            i[k] = '暂无数据'
          }
        })
      }
    })
  } */
  return (
    <div className='subjects'>
      <div className='subjects-casts'>
        <h3>主演:</h3>
        { props.data.casts.map((i, index) => (
          <div className='subjects-casts-item' key={index}>
            <img src={i.avatars ? i.avatars.large : defaultimg} className='subjects-casts-img'/>
            <Link to ={`/celebrity/${i.id}`} className='subjects-casts-name'><span >{i.name ? i.name : '暂无数据'}</span></Link>
            <span className='subjects-casts-enname'>{i.name_en ? i.name_en : '暂无数据'}</span>
          </div>
        ))}
      </div>
      <div className='subjects-summary'>
        <h3 className='subjects-summary-title'>剧情简介</h3>
        <div className='subjects-summary-content' dangerouslySetInnerHTML={summary()}>
        </div>
      </div>
    </div>
  )
}

const CommentContainer = (props) => {
  if (props.data.popular_comments.length === 0) return (<div className='comment'><h3>此电影暂无热评</h3></div>)
  return (
    <div className='comment'>
      <h3>热评</h3>
      { props.data.popular_comments.map((i, index) => (
        <div className='comment-item' key={index}>
          <div className='comment-item-left'>
            <Avatar src={i.author.avatar} className='comment-item-avatar' />
            <span>{i.author.name}</span>
          </div>
          <div className='comment-item-right'>
            {/* <h4>{i.title}</h4> */}
            <div className='comment-item-ranking'><Icon type="like"style={{ color: '#f6e65b', marginRight: 8 }}/>评分:<span>{i.rating.value}</span>/5</div>
            <div className='comment-item-content'>
              {i.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateMovieDetail = (state) => {
  return {
    list: state.moviedetail
  }
}

const mapDispathMovieDetail = (dispatch) => {
  return {
    getmoviedetail: (city, id) => {
      dispatch(getMovieDetail(city, id))
    },
    postsearch: (content, types) => {
      dispatch(getSearch(content, types))
    }
  }
}

const MoiveDetailContainer = connect(
  mapStateMovieDetail,
  mapDispathMovieDetail
)(withRouter(MoiveDetail))

export default MoiveDetailContainer
