import React, { memo,useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { HotRecommendWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'

const YKHotRecommend = memo(() => {

    const { hotRecommends } = useSelector((state) => ({
        hotRecommends:state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])
    
    const playlistId = (id) => {
        return "https://music.163.com/#/playlist?id="+id
    }

    return (
        <HotRecommendWrapper>
            <YKThemeHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div >
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <div>
                                <a className="recommend-link" href={playlistId(item.id)}>
                                    <img className='link-cover' src={item.picUrl} alt={item.title}></img>
                                </a>
                                <div></div>
                                <p>
                                    <a>{item.title}</a>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default YKHotRecommend
