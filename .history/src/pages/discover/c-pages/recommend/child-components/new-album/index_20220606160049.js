import React, { memo, useEffect } from 'react'

import {getNewAlbum} from "@/services/recommend"

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'

const YKNewAlbum = memo(() => {

    useEffect(() => {
        getNewAlbum().then((res) => lo)
    },[])

    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架"/>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
