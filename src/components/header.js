import React from 'react'
import { Input, Select } from 'antd'
import '../style/header.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getIndexMovieData, getSearch, getMovieDetail } from '../store/action'
const InputGroup = Input.Group
const Search = Input.Search
const Option = Select.Option

const SelectBar = (props) => {
  return (
    <div className='select-bar'>
      <span className='select-bar-tip'>请选择你的城市:</span>
      <InputGroup compact>
        <Select defaultValue="深圳" onChange={(v) => { props.selectvalue(v) }}>
          <Option value="深圳">深圳</Option>
          <Option value="广州">广州</Option>
          <Option value="北京">北京</Option>
          <Option value="上海">上海</Option>
          <Option value="东莞">东莞</Option>
        </Select>
      </InputGroup>
    </div>
  )
}
const SearchBar = (props) => {
  let redirect = (c, t) => (props.history.push(
    {
      pathname: `/search/${c}`,
      search: t,
      state: t
    }
  ))
  return (
    <Search
      placeholder="Search..."
      style={{ width: 320 }}
      onSearch={(c) => {
        props.serachvalue(c, 'q')
        redirect(c, 'q')
      }}
    />
  )
}
const mapDispatchHeader = (dispatch) => {
  return {
    togglecity: (city, url, id) => {
      switch (url) {
        case '/d':
          dispatch(getMovieDetail(city, id))
          break
        default:
          dispatch(getIndexMovieData(city))
      }
    },
    postsearch: (content, types) => {
      dispatch(getSearch(content, types))
    }
  }
}
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleSelect (value, url) {
    let regurl = this.props.location.pathname.slice(0, 2)
    let id = this.props.location.pathname.replace(/[^0-9]/ig, '')
    this.props.togglecity(value, regurl, id)
  }
  render () {
    const { history } = this.props
    return (
      <div className='header-bg'>
        <SelectBar selectvalue={ (v, url, id) => { this.handleSelect(v, url, id) } }/>
        <SearchBar history={history} serachvalue={(content, types) => { this.props.postsearch(content, types) }}/>
      </div>
    )
  }
}

const HeaderContainer = connect(null, mapDispatchHeader)(withRouter(Header))
export default HeaderContainer
