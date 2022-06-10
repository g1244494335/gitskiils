import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderLeft
} from './style'

const YKAppHeader = memo(() => {
  return (
      <HeaderWrapper>
          <div className="content w1100"></div>
          <div className="divider"></div>
      </HeaderWrapper>
  )
})

export default YKAppHeader