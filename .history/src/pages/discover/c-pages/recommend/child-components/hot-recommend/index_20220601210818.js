import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'

const YKHotRecommend = memo(() => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction)
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <YKThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        </HotRecommendWrapper>
    )
})

export default YKHotRecommend
