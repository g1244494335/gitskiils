import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'


import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'


const YKRecommendRanking = memo(() => {

    const { toplists } = useSelector((state) => {
        top
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopListAction())
    }, [dispatch])


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking