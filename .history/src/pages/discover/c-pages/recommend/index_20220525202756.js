import React, { memo,useEffect } from 'react'
import { connect } from "react-redux"
import { getTopBannerAction } from './store/actionCreators'
import request from "@/services/request"

const YKRecommend = () => {
  
  const 

  useEffect(() => {
    request({
      url:"/banner"
    }).then((res) => {console.log(res);})
  }, [])

  return (
    <div>YKRecommend</div>
  )
}

const mapStateToProps = state => ({
  topBanners:state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(YKRecommend))