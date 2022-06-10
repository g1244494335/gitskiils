import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'

import { topmenuitems } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from "react-router-config"
import routers from "@/router"

const YKDiscover = memo((props) => {

  const {route}

  const showItems = (item, index) => {
    return (
      <NavLink className='topmenu-link' to={item.to} exact>
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
              <li key={index} className='topmenu-item'>
                {showItems(item, index)}
              </li>
            )
          })}
        </ul>
      </TopMenu>
      {renderRoutes(routers)}
    </DiscoverWrapper>
  )
})

export default YKDiscover