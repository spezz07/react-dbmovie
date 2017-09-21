import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import {getcelebrity} from '../store/action'
import { withRouter } from 'react-router'
import Loading from './loading'
import { Link } from 'react-router-dom'
import '../style/celebrity.scss'

const defaultimg = 'https://img3.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png'
const CelebrityCover = (props) => {
  return (
    <div className='celebrity-cover'>
      <img src={props.data.avatars.large}
        className='celebrity-avatars'/>
      <h3 className='celebrity-name'>{props.data.name}</h3>
      <h4 className='celebrity-enname'>{props.data.name_en}</h4>
      <div className='celebrity-professions'>
        <h5>标签:</h5>
        {props.data.professions.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </div>
    </div>
  )
}

const CelebrityDetail = (props) => {
  let translateHtml = () => {
    return {__html: props.data.summary ? props.data.summary : '此人物暂无简介'}
  }
  return (
    <div className='celebrity-detail'>
      <h3>演员介绍</h3>
      <div className='celebrity-summary' dangerouslySetInnerHTML={translateHtml()}>
      </div>
      <h3>作品</h3>
      <div className='celebrity-works'>
        {props.data.works.map((i, index) => (
          <div className='celebrity-works-item' key={index}>
            <img src={i.subject.images ? i.subject.images.large : defaultimg}/>
            <Link to={`/detail/${i.subject.id}`} className='celebrity-works-item-title'><span>{i.subject.original_title}</span></Link>
            <span className='celebrity-works-item-rating'>评分:
              <Icon type="like"style={{ color: '#f6e65b', marginLeft: 4, fontSize: 24 }} />
              <span>{i.subject.rating.average}</span>
            /10
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

class Celebrity extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '',
      isLoading: true
    }
  }
  componentWillMount () {
    this.props.getcelebritydata(this.props.match.params.id)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.list,
      isLoading: false
    })
  }
  render () {
    let celebrityData = this.state.data
    if (!celebrityData) return (<div><Loading isLoading={this.state.isLoading}/></div>)
    return (
      <div className='celebrity-container'>
        <CelebrityCover data={{...celebrityData}}/>
        <CelebrityDetail data={{...celebrityData}}/>
        <img src={celebrityData.avatars.large}
          className='celebrity-bg'/>
      </div>
    )
  }
}

const mapStatCelebrity = (state) => {
  return {
    list: state.celebritylist
  }
}

const mapDispathCelebrity = (dispatch) => {
  return {
    getcelebritydata: (id) => {
      dispatch(getcelebrity(id))
    }
  }
}
const CelebrityContainer = connect(mapStatCelebrity, mapDispathCelebrity)(withRouter(Celebrity))

export default CelebrityContainer
