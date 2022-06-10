import React, { memo } from 'react'

import { RecommandRankWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommandRank = memo(() => {
    return (
        <RecommandRankWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecommandRankWrapper>
    )
})

export default YKRecommandRank