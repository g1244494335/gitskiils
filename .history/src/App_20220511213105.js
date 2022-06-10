import React, { memo } from 'react'
import {renderRoutes} from "react-router-config"
import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <div>
          <YKAppHeader/>
          {renderRoutes()}
          <YKAppFooter/>
      </div>
  )
})

export default App