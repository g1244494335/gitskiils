import React, { memo } from 'react'
import { FootWrapper, FootLeft, FootRight } from "./style"
import {foo}

const YKAppFooter = memo(() => {

  const showLinks = () => {
    
  }

  return (
    <FootWrapper>
      <div className="content w980">
        <FootLeft>
          <p>

          </p>
        </FootLeft>
        <FootRight>
          FOOTRIGHT
        </FootRight>
      </div>
    </FootWrapper>
  )
})

export default YKAppFooter