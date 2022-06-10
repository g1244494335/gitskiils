import React, { memo } from 'react'
import { connect } from "react-redux"
import { getTopBannerAction } from './store/actionCreators'

const YKRecommend = () => {

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