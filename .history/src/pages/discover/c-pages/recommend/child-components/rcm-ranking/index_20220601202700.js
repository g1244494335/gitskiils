import React, { memo } from 'react'

import { RecomWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecom = memo(() => {
    return (
        <RecomWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecomWrapper>
    )
})

export default YKRecom