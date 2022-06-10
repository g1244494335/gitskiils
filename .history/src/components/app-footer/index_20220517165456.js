import React, { memo } from 'react'
import {FootWrapper, FootLeft,FootRight} from "./style"

const YKAppFooter = memo(() => {
  return (
    <FootWrapper>
      <div className="content w980">
        <FootLeft>
          
        </FootLeft>
        <FootRight>
          FOOTRIGHT
        </FootRight>
      </div>
    </FootWrapper>
  )
})

export default YKAppFooter