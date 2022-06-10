import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
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