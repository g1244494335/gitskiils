import React, { memo } from 'react'

import YKTopBanner from './child-components/top-banner'
import YKHotRecommend from './child-components/hot-recommend'
import YKNewAlbum from './child-components/new-album'
import YKRecommandRanking from './child-components/rcm-ranking'
import YKUserLogin from './child-components/user-login'
import YKResidentSinger from './child-components/resident-singer'
import YKTopAnchor from './child-components/top-anchor'
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
      <Content className='w980'>
        <ContentLeft>
          <YKHotRecommend />
          <YKNewAlbum />
          <YKRecommandRanking/>
        </ContentLeft>
        <ContentRight>
          <YKUserLogin />
          <YKResidentSinger />
          <YKTopAnchor/>
        </ContentRight>
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