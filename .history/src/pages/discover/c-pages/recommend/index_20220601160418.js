import React, { memo } from 'react'

import YKTopBanner from './child-components/top-banner'
import {
  RecommendWrapper,
  Content,
  ContentLeft,
  ContentRight
} from './style'


const YKRecommend = (props) => {

  return (
    <RecommendWrapper>
      <YKTopBanner />
      <Content className=''>
        <ContentLeft></ContentLeft>
        <ContentRight></ContentRight>
      </Content>
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