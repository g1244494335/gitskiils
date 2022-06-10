import React, { memo } from 'react'


import { RecommendWrapper } from './style'


const YKRecommend = (props) => {

  return (
    <RecommendWrapper>
      
    </RecommendWrapper>
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