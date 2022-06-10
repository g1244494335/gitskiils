import React, { memo } from 'react'
import { DiscoverWrapper,TopMenu } from './style'

const YKDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <TopMenu>
        <div>推荐</div>
        <div>排行榜</div>
        <div>歌单</div>
        <div>zhu</div>
        <div>推荐</div>
        <div>推荐</div>
      </TopMenu>
    </DiscoverWrapper>
  )
})

export default YKDiscover