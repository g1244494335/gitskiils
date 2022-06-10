import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import {getTopListAction}


import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

import { getTopList,getRankingSongs } from '@/services/recommend'

const YKRecommendRanking = memo(() => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch()
    }, [dispatch])


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking