import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import { CoverWrapper } from './style'


const YKAlbumCover = memo((props) => {

    const {item} = props

  return (
      <CoverWrapper>
          <div className='album'>
              <img src={getSizeImage(item.picUrl,size)} alt={item.name}}/>

          </div>
      </CoverWrapper>
  )
})

export default YKAlbumCover