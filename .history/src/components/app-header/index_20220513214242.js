import React, { memo } from 'react'

import { headerlinks } from '../../common/local-data'

// import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

const YKAppHeader = memo(() => {

  const showSelectItem = (item,index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      
    }
  }

    return (
        <HeaderWrapper>
            <div className="content w1100">
                <HeaderLeft>
            <a href="#/" className="logo sprite_01"></a>
            <div className="select-list">
              {
                headerlinks.map((item, index) => {
                  return <div key={item.title}>
                    
                  </div>;
                })
              }
            </div>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default YKAppHeader
