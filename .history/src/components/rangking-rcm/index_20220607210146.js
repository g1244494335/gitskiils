import React, { memo } from 'react'

import { RankingWrapper } from './style'

const YKRankingRCM = memo(() => {
    return (
        <RankingWrapper>
            <div className="header"></div>
            <div className="list"></div>
            <div className="footer"></div>

        </RankingWrapper>
    )
})

export default YKRankingRCM
