import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'

import { topmenuitems } from '../../common/local-data'

const YKDiscover = memo(() => {

  const showItems = (item, index) => {
    return (
      <Na href="#" className='topmenu-link'>
        <em>{item.title}</em>
      </Na>
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
    </DiscoverWrapper>
  )
})

export default YKDiscover