import React, { memo, useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'

const YKNewAlbum = memo(() => {

    const { newAlbums } = useSelector((state) => ({
        newAlbums:state.getIn(['recommend','newAlbums'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumAction())
    },[dispatch])

    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架" />
            <div className="content">
                <
            </div>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
