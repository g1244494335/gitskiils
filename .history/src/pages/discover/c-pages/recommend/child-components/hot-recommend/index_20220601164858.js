import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKHotRecommend = memo(() => {
  return (
      <HotRecommendWrapper>
         <YKThemeHeader ti/>
      </HotRecommendWrapper>
  )
})

export default YKHotRecommend