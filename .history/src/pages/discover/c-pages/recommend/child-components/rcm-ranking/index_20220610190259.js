/* eslint-disable no-unused-vars */
import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
// import {dispatch, dispatchWith } from 'redux'

import {
    getTopListAction,
    getUpRankingSongsAction,
    getNewRankingSongsAction,
    getOriRankingSongsAction,
} from '../../store/actionCreators'

import { RecommendRankingWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKRecommendRanking = memo(() => {
    const { toplists, uprankings, newrankings, orirankings } = useSelector(
        (state) => ({
            toplists: state.getIn(['recommend', 'topLists']),
            // uprankings: state.getIn(['recommend', 'uprankings']),
            // newrankings: state.getIn(['recommend', 'newrankings']),
            // orirankings: state.getIn(['recommend', 'orirankings']),
        }),
        shallowEqual,
    )

    const dispatch = useDispatch()
    // const dispatch2 = useDispatch()
    // const dispatch3 = useDispatch()
    // const dispatch4 = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            return await getTopListAction()
        }
        fetchData().then((res) => {
            dispatch(res)
            dispatch2(getUpRankingSongsAction(toplists[0].id))
            dispatch3(getNewRankingSongsAction(toplists[1].id))
            dispatch4(getOriRankingSongsAction(toplists[2].id))
    })
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         return await getTopListAction()
    //     }
    //     fetchData().then((res) => {
    //         dispatch(res)
    //         dispatch2(getUpRankingSongsAction(toplists[0].id))
    //         dispatch3(getNewRankingSongsAction(toplists[1].id))
    //         dispatch4(getOriRankingSongsAction(toplists[2].id))
    // })
    // }, [])

    return (
        <RecommendRankingWrapper>
            <YKThemeHeader title="李笑" />
            <div className="background recommend-top-bg"></div>
        </RecommendRankingWrapper>
    )
})

export default YKRecommendRanking

// .then(() => {
//     dispatch(getUpRankingSongsAction(toplists[0].id))
//     dispatch(getNewRankingSongsAction(toplists[1].id))
//     dispatch(getOriRankingSongsAction(toplists[2].id))
// })
