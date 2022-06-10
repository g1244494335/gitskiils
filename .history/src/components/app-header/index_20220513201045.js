import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

const YKAppHeader = memo(() => {
  return (
      <HeaderWrapper>
          <div className="content w1100">
              <HeaderLeft
          </div>
          <div className="divider"></div>
      </HeaderWrapper>
  )
})

export default YKAppHeader