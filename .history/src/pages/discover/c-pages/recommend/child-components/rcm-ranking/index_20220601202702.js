import React, { memo } from 'react'

import { RecommandWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommand = memo(() => {
    return (
        <RecommandWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecommandWrapper>
    )
})

export default YKRecommand