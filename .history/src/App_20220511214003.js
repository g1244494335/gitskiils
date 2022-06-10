import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"

import routers from './router'

import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <H>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter/>
      </>
  )
})

export default App