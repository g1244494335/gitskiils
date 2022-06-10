import React, { memo, useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import {}

const YKNewAlbum = memo(() => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch()
    },[])

    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架"/>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum