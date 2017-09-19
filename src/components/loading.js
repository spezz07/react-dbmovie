import React from 'react'
import { Spin } from 'antd'
import '../style/loading.scss'

const Loading = (props) => {
  return (
    <div className ='spin' style={props.isLoading ? {display: 'block'} : {display: 'none'} }>
      <Spin tip="数据加载中..." size="large" delay={100} className='spin-circle'/>
    </div>
  )
}

export default Loading
