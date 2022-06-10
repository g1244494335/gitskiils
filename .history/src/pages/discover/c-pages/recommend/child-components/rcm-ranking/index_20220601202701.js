import React, { memo } from 'react'

import { RecommWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecomm = memo(() => {
    return (
        <RecommWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecommWrapper>
    )
})

export default YKRecomm