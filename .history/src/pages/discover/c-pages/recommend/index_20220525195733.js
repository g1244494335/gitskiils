import React, { memo } from 'react'
import {connect} from "react-redux"

const YKRecommend = () => {
  return (
    <div>YKRecommend</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(YKRecommend))