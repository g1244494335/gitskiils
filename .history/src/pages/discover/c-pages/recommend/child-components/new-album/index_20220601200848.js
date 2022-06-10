import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKN = memo(() => {
    return (
        <NWrapper>
            <YKThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        </NWrapper>
    )
})

export default YKN
