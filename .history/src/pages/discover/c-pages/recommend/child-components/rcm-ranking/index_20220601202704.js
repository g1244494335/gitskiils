import React, { memo } from 'react'

import { RecommandRWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommandR = memo(() => {
    return (
        <RecommandRWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecommandRWrapper>
    )
})

export default YKRecommandR