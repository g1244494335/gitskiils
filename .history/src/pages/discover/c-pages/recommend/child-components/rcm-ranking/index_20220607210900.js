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
        dispatch(getTopListAction())
    }, [dispatch])


    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="榜单" />
            <div className='ba'>

            </div>
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking

// .then(() => {
//     dispatch(getUpRankingSongsAction(toplists[0].id))
//     dispatch(getNewRankingSongsAction(toplists[1].id))
//     dispatch(getOriRankingSongsAction(toplists[2].id))
// })