import React from 'react'
import { Route } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'

import Header from '../components/header'
import MoiveListContainer from '../components/movieslist'
import MoiveDetailContainer from '../components/moivedetail'
import SearchListContainer from '../components/search'
import CelebrityContainer from '../components/celebrity'

let history = createHistory()

const RouteConfig = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path='/' component={Header}/>>
      <Route path='/' exact component={MoiveListContainer} />
      <Route path='/detail/:id' exact component={ MoiveDetailContainer} />
      <Route path='/search/:content' exact component={ SearchListContainer} />
      <Route path='/celebrity/:id' exact component={ CelebrityContainer} />
    </div>
  </ConnectedRouter>
)

export default RouteConfig
