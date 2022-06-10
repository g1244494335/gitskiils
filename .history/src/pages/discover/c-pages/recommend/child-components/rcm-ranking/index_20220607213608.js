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

    const { uprankings,newrankings,orirankings } = useSelector((state) => ({
        uprankings:state.getIn(['recommend','uprankings']),
        newrankings:state.getIn(['recommend','newrankings']),
        orirankings:state.getIn(['recommend','orirankings'])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        let a = Promise.resolve(dispatch(getTopListAction()))
        a.then(() => {
            dispatch(getUpRankingSongsAction(toplists[0].id))
            dispatch(getNewRankingSongsAction(toplists[1].id))
            dispatch(getOriRankingSongsAction(toplists[2].id))
        })
    }, [dispatch])


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            <div className='background recommend-top-bg'>
                
            </div>
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking

.then(() => {
    dispatch(getUpRankingSongsAction(toplists[0].id))
    dispatch(getNewRankingSongsAction(toplists[1].id))
    dispatch(getOriRankingSongsAction(toplists[2].id))
})