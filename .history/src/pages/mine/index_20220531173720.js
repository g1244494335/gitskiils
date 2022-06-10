import React, { memo } from 'react'
import { MineWrapper } from './style'

const YKMine = memo(() => {
  return (
    <MineWrapper className="w980">
      <div className="content my_music">
        <h2 className="text-indent">登录网易云音乐</h2>
        <a hidefocus="true" className='btn text-indent' href="javascipt" >立即登录</a>
      </div>
      <div>YKRanking</div>
    </MineWrapper>
  )
})

export default YKMine