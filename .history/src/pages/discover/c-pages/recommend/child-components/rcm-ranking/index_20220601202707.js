import React, { memo } from 'react'

import { RecommandRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommandRanking = memo(() => {
    return (
        <RecommandRankingWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecommandRankingWrapper>
    )
})

export default YKRecommandRanking