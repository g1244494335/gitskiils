import React, { memo,useEffect } from 'react'
import { connect,useDispatch } from "react-redux"
import { getTopBannerAction } from './store/actionCreators'
// import request from "@/services/request"

const YKRecommend = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [dispatch])
  

  return (
    <div>YKRecommend</div>
  )
}


export default memo(YKRecommend)

// const YKRecommend = (props) => {
  
//   const {getBanners,topBanners}=props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>YKRecommend:{ topBanners.length}</div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(YKRecommend))