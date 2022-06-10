import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const YKThemeHeader = memo((props) => {

    const { title,keywords } = props;

    return <HeaderWrapper className>
        <div className="left">
            <h3>{title}</h3>
            <div className="keywords">
                {
                    keywords.map((item,index) => {
                        return (
                            <div className="item" key={item}>
                                <a href='todo'>{item}</a>
                                <span className="divider">|</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="right">
            <a href="todo">更多</a>
            <i className="icon sprite_02">&nbsp;</i>
        </div>
    </HeaderWrapper>
})

export default YKThemeHeader
