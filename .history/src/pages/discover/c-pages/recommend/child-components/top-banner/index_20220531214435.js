import React, { memo, useEffect, useRef,useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { TopBannerWrapper, TOPBanner, TOPBannerLeft, TOPBannerRight, BannerControl } from './style'
import { Carousel } from 'antd'

const YKTopBanner = memo(() => {

  const [currentIndex,setCurrentIndex] =useState(0)

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
  
  const bannerChange = useCallback((from,to) => {
      console.log(from,to);
  },[])

    return (
        <TopBannerWrapper >
            <TOPBanner className="w980">
                <TOPBannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
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
            <button className="btn" onClick={(e) => {
              bannerRef.current.prev();
            }
            }></button>
                    <button className="btn" onClick={(e) => {
              bannerRef.current.next();
            }
            }></button>
                </BannerControl>
            </TOPBanner>
        </TopBannerWrapper>
    )
})

export default YKTopBanner
