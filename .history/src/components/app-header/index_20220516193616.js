import React, { memo } from 'react'

import { headerlinks } from '../../common/local-data'

import { NavLink } from 'react-router-dom'
import {Input} from "antd"
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

const YKAppHeader = memo(() => {

  const showSelectItem = (item,index) => {
    if (index < 3) {
      return <NavLink to={item.link} exact>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
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
                  return (
                    <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                    </div>
                  )
                })
              }
            </div>
                </HeaderLeft>
          <HeaderRight>
            <Input pl></Input>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default YKAppHeader
