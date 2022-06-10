import React, { memo,useEffect } from 'react'

import { useDispatch,useSelector,shallowEqual } from "react-redux"
import { getTopBannerAction } from '../store/actionCreators'

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
    <div>YKTopBanner:{topBanners.LENGTH}</div>
  )
})

export default YKTopBanner