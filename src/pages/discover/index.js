import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'

import { topmenuitems } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from "react-router-config"

const YKDiscover = memo((props) => {

  const { route } = props
  
  const showItems = (item, index) => {
    return (
            <NavLink key={index} className='topmenu-link' to={item.to} exact>
              {item.title}
            </NavLink>
          )
}

  return (
    <DiscoverWrapper>
      <TopMenu>
        <ul className='topmenulist w1100'>
          {topmenuitems.map((item, index) => {
            return (
              <li key={item.title} className='topmenu-item'>
                {showItems(item, index)}
              </li>
            )
          })}
        </ul>
      </TopMenu>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default YKDiscover