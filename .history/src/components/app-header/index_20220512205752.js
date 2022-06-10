import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

const YKAppHeader = memo(() => {
  return (
      <HeaderWrapper>
          <div className="content wrap-v1"></div>
          <div className="divider"></div>
      </HeaderWrapper>
  )
})

export default YKAppHeader