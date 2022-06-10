import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const YKThemeHeader = memo(() => {
    return <HeaderWrapper>
        <div className="left"></div>
        <div className="right">
            <a href="#">更多</a>
            <i className="icon sprite-02"></i>
        </div>
    </HeaderWrapper>
})

export default YKThemeHeader
