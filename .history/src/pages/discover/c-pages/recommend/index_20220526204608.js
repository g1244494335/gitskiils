import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from "react-redux"
import { getTopBannerAction } from './store/actionCreators'

const YKRecommend = (props) => {

  const {topBanners} = useSelector(state => ({
    topBanners:state.get('recommend').get('topBanners')
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  

  return (
    <div>YKRecommend:{topBanners.length }</div>
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