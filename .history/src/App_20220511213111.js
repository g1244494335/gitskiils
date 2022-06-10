import React, { memo } from 'react'
import {renderRoutes} from "react-router-config"
import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
import routers from './router'
const App = memo(() => {
  return (
      <div>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter/>
      </div>
  )
})

export default App