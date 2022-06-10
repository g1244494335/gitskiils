import React, { memo } from 'react'

import { RecoWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKReco = memo(() => {
    return (
        <RecoWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RecoWrapper>
    )
})

export default YKReco