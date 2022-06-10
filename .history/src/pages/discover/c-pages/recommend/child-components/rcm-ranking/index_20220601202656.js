import React, { memo } from 'react'

import { ReWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRe = memo(() => {
    return (
        <ReWrapper>
            <YKThemeHeader title="新碟上架"/>
        </ReWrapper>
    )
})

export default YKRe