import React, { memo } from 'react'
import { MineWrapper } from './style'

const YKMine = memo(() => {
  return (
    <MineWrapper className="w980 my_music">
      <h2>登录网易云音乐</h2>
      <a>立即登录</a>
    </MineWrapper>
  )
})

export default YKMine