import React, { memo } from 'react'

import { ReciWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKReci = memo(() => {
    return (
        <ReciWrapper>
            <YKThemeHeader title="新碟上架"/>
        </ReciWrapper>
    )
})

export default YKReci