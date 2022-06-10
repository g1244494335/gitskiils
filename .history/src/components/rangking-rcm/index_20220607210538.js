import React, { memo } from 'react'

import {getSizeImage}
import { RankingWrapper } from './style'

const YKRankingRCM = memo((props) => {

    const {item} = props


    return (
        <RankingWrapper>
            <div className="header">
                <div className="img">
                    <img src={item.coverImgUrl} alt={item.description}></img>
                    <a href={item.id}> </a>
                </div>
            </div>
            <div className="list"></div>
            <div className="footer"></div>

        </RankingWrapper>
    )
})

export default YKRankingRCM
