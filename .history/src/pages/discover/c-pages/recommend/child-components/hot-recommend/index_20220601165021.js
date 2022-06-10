import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKHotRecommend = memo(() => {
  return (
      <HotRecommendWrapper>
         <YKThemeHeader title ='热门推荐' keywords ={['华语','流行','']}>
      </HotRecommendWrapper>
  )
})

export default YKHotRecommend