import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'


const YKDiscover = memo(() => {
  return (
    <DiscoverWrapper className='w1100'>
      <TopMenu>
        <ul className='topmenulist'>
          <li className='topmenu-item'>推荐</li>
          <li className='topmenu-item'>排行榜</li>
          <li className='topmenu-item'>歌单</li>
          <li className='topmenu-item'>主播电台</li>
          <li className='topmenu-item'>歌手</li>
          <li className='topmenu-item'>新碟上架</li>
        </ul>
        
      </TopMenu>
    </DiscoverWrapper>
  )
})

export default YKDiscover