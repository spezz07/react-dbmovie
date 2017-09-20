import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import {getcelebrity} from '../store/action'
import { withRouter } from 'react-router'
import '../style/celebrity.scss'

const CelebrityCover = (props) => {
  return (
    <div className='celebrity-cover'>
      <img src='https://img1.doubanio.com/img/celebrity/large/51597.jpg'
        className='celebrity-avatars'/>
      <h3 className='celebrity-name'>伊利亚·伍德</h3>
      <h4 className='celebrity-enname'>Elijah Wood</h4>
      <div className='celebrity-professions'>
        <h5>标签:</h5>
        <span>演员</span>
        <span>演员</span>
        <span>演员</span>
      </div>
    </div>
  )
}

const CelebrityDetail = (props) => {
  return (
    <div className='celebrity-detail'>
      <h3>演员介绍</h3>
      <div className='celebrity-summary'>
    "伊利亚·乔丹·伍德(Elijah Jordan Wood)，1981年1月28日出生
    于美国爱荷华州的锡达拉皮兹，父亲沃伦  伊利亚·伍德·伍德，母亲黛比·伍德
      </div>
      <h3>作品</h3>
      <div className='celebrity-works'>
        <div className='celebrity-works-item'>
          <img src='https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2375579599.webp'/>>
          <span className='celebrity-works-item-title'>SMAPxSMAP</span>
          <span className='celebrity-works-item-rating'>评分:
            <Icon type="like"style={{ color: '#f6e65b', marginLeft: 4, fontSize: 24 }} />
            <span>9.8</span>
            /10
          </span>
        </div>
      </div>
    </div>
  )
}

class Celebrity extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ''
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
    if (!celebrityData) return (<div>1111</div>)
    return (
      <div className='celebrity-container'>
        <CelebrityCover data={{...celebrityData}}/>
        <CelebrityDetail/>
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
