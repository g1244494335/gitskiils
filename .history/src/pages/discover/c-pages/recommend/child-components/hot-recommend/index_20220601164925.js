import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKHotRecommend = memo(() => {
  return (
      <HotRecommendWrapper>
         <YKThemeHeader title ='热门推荐' ke'y>
      </HotRecommendWrapper>
  )
})

export default YKHotRecommend