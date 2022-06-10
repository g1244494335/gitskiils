import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item,size = 100, width = 118} = props

    return (
        <CoverWrapper size={size} width={width}>
            <div className='album'>
                <img src={getSizeImage(item.picUrl,size)} alt={item.name} />
            </div>
            <div className
        </CoverWrapper>
    )
    })

export default YKAlbumCover

// 
// 