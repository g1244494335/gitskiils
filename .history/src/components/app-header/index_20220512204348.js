import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

const YKAppHeader = memo(() => {
  return (
      <div>
          <NavLink to='/'>发现音乐</NavLink>
          <NavLink to='/mine'>我的音乐</NavLink>
          <NavLink to='/friend'>关注</NavLink>
      </div>
  )
})

export default YKAppHeader