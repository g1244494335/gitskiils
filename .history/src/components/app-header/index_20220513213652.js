import React, { memo } from 'react'

import {}

// import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

const YKAppHeader = memo(() => {
    return (
        <HeaderWrapper>
            <div className="content w1100">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"></a>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

export default YKAppHeader
