import React, { memo,useEffect } from 'react'

import { useDispatch,useSelector,shallowEqual } from "react-redux"
import { getTopBannerAction } from '../../store/actionCreators'

import {
  TopBannerWrapper,
  TOPBanner,
  TOPBannerLeft,
  TOPBannerRight
} from './style'
import { Carousel } from 'antd';

const YKTopBanner = memo(() => {

  const {topBanners} = useSelector(state => ({
    // topBanners:state.get('recommend').get('topBanners')
    topBanners:state.getIn(['recommend','topBanners']),
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <TopBannerWrapper>
      <TOPBanner className='w980'>
        <TOPBannerLeft>
        <Carousel effect="fade" >
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
        </TOPBannerLeft>
        <TOPBannerRight></TOPBannerRight>
      </TOPBanner>
    </TopBannerWrapper>
  )
})

export default YKTopBanner