import React, { memo } from 'react'

import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'

import routers from './router'
import store from './store'

import YKAppHeader from '@/components/app-header'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <HashRouter>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter/>
      </HashRouter>
  )
})

export default App