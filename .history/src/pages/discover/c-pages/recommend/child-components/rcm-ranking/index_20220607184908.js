import React, { memo } from 'react'

import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

import { getTopList } from '@/services/recommend'

const YKRecommendRanking = memo(() => {
    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking