import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../components/header'
import MoiveListContainer from '../components/movieslist'
import MoiveDetailContainer from '../components/moivedetail'
import SearchListContainer from '../components/search'
import CelebrityContainer from '../components/celebrity'

const RouteConfig = () => (
  <Router>
    <div>
      <Route path='/' component={Header}/>>
      <Route path='/' exact component={MoiveListContainer} />
      <Route path='/detail/:id' exact component={ MoiveDetailContainer} />
      <Route path='/search/:content' exact component={ SearchListContainer} />
      <Route path='/celebrity/:id' exact component={ CelebrityContainer} />
    </div>
  </Router>
)

export default RouteConfig
