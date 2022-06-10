import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'

import { topmenuitems } from '../../common/local-data'

const YKDiscover = memo(() => {

  
  return (
    <DiscoverWrapper className='w1100'>
      <TopMenu>
        <ul className='topmenulist'>
          {topmenuitems.map((item, index) => {
            return (
              <li key={index}>
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