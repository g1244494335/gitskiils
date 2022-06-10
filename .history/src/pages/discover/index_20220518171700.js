import React, { memo } from 'react'
import { DiscoverWrapper,TopMenu } from './style'

const YKDiscover = memo(() => {
  return (
    <DiscoverWrapper className='w1100'>
      <TopMenu>
        <ul className='menu'>
          <li>推荐</li>
          <li>排行榜</li>
          <li>歌单</li>
          <li>主播电台</li>
          <li>歌手</li>
          <li>新碟上架</li>
        </ul>
        
      </TopMenu>
    </DiscoverWrapper>
  )
})

export default YKDiscover