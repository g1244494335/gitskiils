import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import {albumId} from '../../utils/getUrl'
import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item,size = 100, width = 118 bgp} = props

    return (
        <CoverWrapper size={size} width={width}>
            <div className='album'>
                <img src={getSizeImage(item.picUrl, size)} alt={item.name} />
                <a className='cover sprite_cover' href={albumId(item.id)}> </a>
            </div>
            <div className='info'>

            </div>
        </CoverWrapper>
    )
    })

export default YKAlbumCover

// 
// 