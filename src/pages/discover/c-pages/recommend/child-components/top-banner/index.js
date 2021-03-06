import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { TopBannerWrapper, TOPBanner, TOPBannerLeft, TOPBannerRight, BannerControl } from './style'
import { Carousel } from 'antd'

const YKTopBanner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const { topBanners } = useSelector(
        (state) => ({
            // topBanners:state.get('recommend').get('topBanners')
            topBanners: state.getIn(['recommend', 'topBanners']),
        }),
        shallowEqual,
    )

    const dispatch = useDispatch()

    const bannerRef = useRef()

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'
    const songId = (id) => {
        return 'https://music.163.com/#/song?id=' + id
    }

    return (
        <TopBannerWrapper bgImage={bgImage}>
            <TOPBanner>
                <TOPBannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {topBanners.map((item, index) => {
                            return (
                                <a className="banner-item" href={songId(item.targetId)} key={item.targetId}>
                                    <img className="banner-image" src={item.imageUrl} alt={item.typeTitle} />
                                </a>
                            )
                        })}
                    </Carousel>
                </TOPBannerLeft>
                <TOPBannerRight>
                    <a className="download-cli text-indent" href="javascript">
                        下载客户端
                    </a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </TOPBannerRight>
                <BannerControl>
                    <button
                        className="btn"
                        onClick={(e) => {
                            bannerRef.current.prev()
                        }}
                    ></button>
                    <button
                        className="btn"
                        onClick={(e) => {
                            bannerRef.current.next()
                        }}
                    ></button>
                </BannerControl>
            </TOPBanner>
        </TopBannerWrapper>
    )
})

export default YKTopBanner
