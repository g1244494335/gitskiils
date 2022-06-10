import React, { memo } from 'react'
import {connect} from "react-redux"

const YKRecommend = () => {
  return (
    <div>YKRecommend</div>
  )
}

const mapStateToProps = state => ({
  topBanners:state.recommend.topBanners
})

const mapDispatchToProps = dispatch=

export default connect(mapStateToProps, mapDispatchToProps)(memo(YKRecommend))