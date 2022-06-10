import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

const YKAppHeader = memo(() => {
  return (
      <HeaderWrapper>
          <div className="content"></div>
          <div className="divi"></div>
      </HeaderWrapper>
  )
})

export default YKAppHeader