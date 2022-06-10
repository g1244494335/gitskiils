import React, { memo,useEffect } from 'react'

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKNewAlbum = memo(() => {

    
    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架"/>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
