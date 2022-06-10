import React, { memo ,useEffect } from 'react'
import { DiscoverWrapper, TopMenu } from './style'
import request from "@/services/request"

import { topmenuitems } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from "react-router-config"

const YKDiscover = memo((props) => {

  useEffect(() => {
    request({
      url:''
    }).t
  
    return () => {
      second
    }
  }, [third])
  

  const { route } = props

  const showItems = (item, index) => {
    console.log(this.props);
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
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default YKDiscover