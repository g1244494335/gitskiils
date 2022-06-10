import React, { memo } from 'react'
import { DiscoverWrapper,TopMenu } from './style'

const YKDiscover = memo(() => {
  return (
    <DiscoverWrapper className=''>
      <TopMenu>
        <div>推荐</div>
        <div>排行榜</div>
        <div>歌单</div>
        <div>主播电台</div>
        <div>歌手</div>
        <div>新碟上架</div>
      </TopMenu>
    </DiscoverWrapper>
  )
})

export default YKDiscover