import React, { memo } from 'react'

import { RecommndRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommandRanking = memo(() => {
    return (
        <RecommandRankingWrapper>
            <YKThemeHeader title="榜单"/>
        </RecommandRankingWrapper>
    )
})

export default YKRecommandRanking