import React, { memo } from 'react'

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
    <div>YKTopBanner</div>
  )
})

export default YKTopBanner