import React, { memo } from 'react'

import { CoverWrapper } from './style'

const YKAlbumCover = memo((props) => {

    const {item} = props

    return (
        <CoverWrapper>
            <div className='album'>
                <img src={getSizeImage(item.picUrl,size)} alt={item.name} />
            </div>
        </CoverWrapper>
    )
    })

export default YKAlbumCover

// size = 100, width = 118
// 