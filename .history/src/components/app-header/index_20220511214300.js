import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const YKAppFooter = memo(() => {
  return (
      <div>
          <NavLink to='/'>发现</NavLink>
      </div>
  )
})

export default YKAppFooter