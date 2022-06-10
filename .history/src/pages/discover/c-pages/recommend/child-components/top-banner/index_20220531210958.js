import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { TopBannerWrapper, TOPBanner, TOPBannerLeft, TOPBannerRight, BannerControl } from './style'
import { Carousel } from 'antd'

const YKTopBanner = memo(() => {
    const { topBanners } = useSelector(
        (state) => ({
            // topBanners:state.get('recommend').get('topBanners')
            topBanners: state.getIn(['recommend', 'topBanners']),
        }),
        shallowEqual,
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    return (
        <TopBannerWrapper>
            <TOPBanner className="w980">
                <TOPBannerLeft>
                    <Carousel effect="fade" autoplay>
                        {topBanners.map((item, index) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="banner-image" src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })}
                    </Carousel>
                </TOPBannerLeft>
                <TOPBannerRight>
                    <div className="download-cli text-indent">下载客户端</div>
          </TOPBannerRight>
          <BannerControl>
                <button className="btn" onc></button>
                <button className="btn"></button>
            </BannerControl>
            </TOPBanner>
            
        </TopBannerWrapper>
    )
})

export default YKTopBanner
