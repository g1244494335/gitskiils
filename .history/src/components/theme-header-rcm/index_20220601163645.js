import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const YKThemeHeader = memo(() => {

    const {title} = 

    return <HeaderWrapper>
        <div className="left">
            <h3></h3>
        </div>
        <div className="right">
            <a href="todo">更多</a>
            <i className="icon sprite-02"></i>
        </div>
    </HeaderWrapper>
})

export default YKThemeHeader
