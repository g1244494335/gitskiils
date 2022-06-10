import React, { memo, useEffect } from 'react'
import { useDispatch,shallowEqual,useSelector } from 'react-redux'

import { NewAlbumWrapper } from './style'
import YKThemeHeader from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'

const YKNewAlbum = memo(() => {

    const { n } = useSelector((state) => ({
        n:state.getIn(['recommend','n'])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumAction())
    },[dispatch])

    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架"/>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
