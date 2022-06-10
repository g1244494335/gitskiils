import React, { memo } from 'react'

import { RWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKR = memo(() => {
    return (
        <RWrapper>
            <YKThemeHeader title="新碟上架"/>
        </RWrapper>
    )
})

export default YKR