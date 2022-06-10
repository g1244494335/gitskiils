import React, { memo } from 'react'
import { MineWrapper } from './style'

const YKMine = memo(() => {
  return (
    <MineWrapper className="w980 my_music mine">
      <div className="content">
        <h2>登录网易云音乐</h2>
      <a>立即登录</a>
      </div>
      
    </MineWrapper>
  )
})

export default YKMine