import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const YKThemeHeader = memo(() => {

    const { title,keywords } = props;

    return <HeaderWrapper>
        <div className="left">
            <h3>{title}</h3>
            <div className="keywords">
                {
                    keywords.map((item,index) => {
                        return (
                            <div>
                                <a href='todo'>{item}</a>
                                <span>|</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="right">
            <a href="todo">更多</a>
            <i className="icon sprite-02"></i>
        </div>
    </HeaderWrapper>
})

export default YKThemeHeader
