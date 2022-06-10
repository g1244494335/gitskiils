import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import {
    getTopListAction,
    getUpRankingSongsAction,
    getNewRankingSongsAction,
    getOriRankingSongsAction
} from '../../store/actionCreators'


import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'


const YKRecommendRanking = memo(() => {

    const { toplists } = useSelector((state) => ({
        toplists:state.getIn(['recommend','toplists'])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopListAction()).then(([, toplists[1], toplists[2]]) => {
    dispatch(getUpRankingSongsAction(toplists[0].id)),
    dispatch(getUpRankingSongsAction(toplists[0].id)),
    dispatch(getUpRankingSongsAction(toplists[0].id)),
        
})
    }, [dispatch])


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking