import React, { memo } from 'react'

import {}
import { CoverWrapper } from './style'


const YKAlbumCover = memo((props) => {

    const {item} = props

  return (
      <CoverWrapper>
          <div className='album'>
              <img src={item.picUrl} alt={item.name}}/>

          </div>
      </CoverWrapper>
  )
})

export default YKAlbumCover