import React, { memo, useEffect,useRef } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import {Carousel} from 'antd'
import YKThemeHeader from '@/components/theme-header-rcm'
import YKAlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'

const YKNewAlbum = memo(() => {

    const { newAlbums } = useSelector((state) => ({
        newAlbums:state.getIn(['recommend','newAlbums'])
    }),shallowEqual)

    const dispatch = useDispatch()

    const albumRef = useRef()

    useEffect(() => {
        dispatch(getNewAlbumAction())
    },[dispatch])

    return (
        <NewAlbumWrapper>
            <YKThemeHeader title="新碟上架" />
            <div className="content">
                <button className='arrow arrow-left sprite_02' onClick={e => albumRef.current.prev()}></button>
                <div className="album">
                    <Carousel autoplay dots={false} ref={albumRef}>
                        {
                            [0, 1].map(index => {
                                return (
                                    <div className='page' key={index}>
                                        {
                                            newAlbums.slice(index * 5, (index + 1) * 5).map(item => {
                                                return (
                                                    <YKAlbumCover item={item}
                                                )
                                            })
                                        }
                                    </div>
                                ) 
                            })
                        }
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02' onClick={e => albumRef.current.next()}></button>
            </div>
        </NewAlbumWrapper>
    )
})

export default YKNewAlbum
