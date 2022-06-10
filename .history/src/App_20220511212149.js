import React, { memo } from 'react'
import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <div>
          <tAppHeader/>
          <h2>Content</h2>
          <AppFooter/>
      </div>
  )
})

export default App