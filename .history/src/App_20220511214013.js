import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'

import routers from './router'

import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <HashRouter>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter/>
      </Hsh>
  )
})

export default App