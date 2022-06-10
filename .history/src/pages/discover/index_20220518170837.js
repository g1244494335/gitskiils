import React, { memo } from 'react'
import { DiscoverWrapper,TopMenu } from './style'

const YKDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <TopMenu>
        <div>推荐</div>
        <div>排行榜</div>
        <div>歌单</div>
        <div>主播电台</div>
        <div>歌手</div>
        <div></div>
      </TopMenu>
    </DiscoverWrapper>
  )
})

export default YKDiscover