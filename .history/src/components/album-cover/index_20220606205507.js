import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import {albumId} from '../../utils/getUrl'
import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item,size = 100, width = 118, bgp="-570px"} = props

    return (
        <CoverWrapper size={size} width={width} bgp={bgp}>
            <div className='album'>
                <img src={getSizeImage(item.picUrl, size)} alt={item.name} />
                <a className='cover sprite_cover' href={albumId(item.id)}> </a>
            </div>
            <div className='info'>
                <div cl
            </div>
        </CoverWrapper>
    )
    })

export default YKAlbumCover

// 
// 