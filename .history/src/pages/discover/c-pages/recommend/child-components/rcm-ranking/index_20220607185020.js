import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'


import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

import { getTopList,getListSongs } from '@/services/recommend'

const YKRecommendRanking = memo(() => {

    const 


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking