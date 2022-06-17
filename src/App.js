import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'

import routers from './router'
import store from './store'

import YKAppHeader from '@/components/app-header'
import YKAppFooter from '@/components/app-footer'
import YKPlayerBar from './pages/player/app-player-bar'
import ErrorBoundaries from '@/components/Error Boundaries'
const App = memo(() => {
  return (
    <Provider store={store}>
      <ErrorBoundaries>
        <HashRouter>
          <YKAppHeader/>
          {renderRoutes(routers)}
          <YKAppFooter />
          <YKPlayerBar/>
      </HashRouter>
      </ErrorBoundaries>
      
    </Provider>
  )
})

export default App