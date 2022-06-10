import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import {albumId} from '../../utils/getUrl'
import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item,size = 100, width = 118,height=150, bgp="-570px"} = props

    return (
        <CoverWrapper size={size} width={width} height={height} bgp={bgp}>
            <div className='album-cover'>
                <img src={getSizeImage(item.picUrl, size)} alt={item.name} />
                <a className='cover sprite_cover' href={albumId(item.id)}> </a>
            </div>
            <div className='info'>
                <p>
                    <a className='name' href={albumId(item.id)}>{item.name}</a>
                    
                </p>
                <p className='artist'>
                <a href={albumId(item.id)}>{item.artist.name}</a>
                </p>
            </div>
        </CoverWrapper>
    )
    })

export default YKAlbumCover

// 
// 