import React, { memo,useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'
import YKSongsCover from '@/components/songs-cover'

const YKHotRecommend = memo(() => {

    const { hotRecommends } = useSelector((state) => ({
        hotRecommends:state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])


    return (
        <HotRecommendWrapper>
            <YKThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div className="content">
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <YKSongsCover key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default YKHotRecommend
