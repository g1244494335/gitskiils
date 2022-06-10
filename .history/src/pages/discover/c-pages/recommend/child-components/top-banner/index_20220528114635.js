import React, { memo,useEffect } from 'react'

import { useDispatch,useSelector,shallowEqual } from "react-redux"
import { getTopBannerAction } from '../../store/actionCreators'

import { TopBannerWrapper } from './style'
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
      <TOPBanner>
        <TOPBannerLeft></TOPBannerLeft>
        <TOPBannerR></TOPBannerR>
      </TOPBanner>
    </TopBannerWrapper>
  )
})

export default YKTopBanner