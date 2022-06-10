import React, { memo } from 'react'
import YKAppHeader from '@/components/app-footer'
import YKAppFooter from '@/components/app-footer'
const App = memo(() => {
  return (
      <div>
          <AppHeader/>
          <h2>Content</h2>
          <AppHeader/>
      </div>
  )
})

export default App