import React, { memo } from 'react'

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKNewAlbum = memo(() => {
    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
