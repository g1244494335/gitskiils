import React, { memo } from 'react'

import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item} = props

  return (
      <CoverWrapper>
          <div className='album'>
              <img src={item.pic}
          </div>
      </CoverWrapper>
  )
})

export default YKAlbumCover