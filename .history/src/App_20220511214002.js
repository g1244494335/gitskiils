import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"

import routers from './router'

import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <h=>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter/>
      </h=>
  )
})

export default App