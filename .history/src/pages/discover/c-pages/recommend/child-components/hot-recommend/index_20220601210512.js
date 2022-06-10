import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKHotRecommend = memo(() => {
    return (
        <HotRecommendWrapper>
            <YKThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        </HotRecommendWrapper>
    )
})

export default YKHotRecommend
