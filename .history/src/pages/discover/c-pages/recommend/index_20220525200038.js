import React, { memo } from 'react'
import { connect } from "react-redux"
import 

const YKRecommend = () => {
  return (
    <div>YKRecommend</div>
  )
}

const mapStateToProps = state => ({
  topBanners:state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(YKRecommend))