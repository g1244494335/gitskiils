import React, { memo } from 'react'
import {re} from "react-router-config"
import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <div>
          <YKAppHeader/>
          <h2>Content</h2>
          <YKAppFooter/>
      </div>
  )
})

export default App