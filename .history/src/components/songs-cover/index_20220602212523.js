import React, { memo } from 'react'

import {CoverWrapper} from './style'

const YKSongsCover = memo((props) => {
    const { item } = props

    const playlistId = (id) => {
        return 'https://music.163.com/#/playlist?id=' + id
    }

    return (
        <CoverWrapper key={item}>
            <div className='cover-top'>
                <img className="link-cover" src={item.picUrl} alt={item.name}></img>
                <a className="recommend-link sprite_cover" href={playlistId(item.id)}> </a>

                <div>
                    <span>
                        <i></i>
                        {/* {item.playCount} */}
                    </span>
                    <i></i>
                </div>
            </div>
            <div className='cover-bottom'>
                <p>
                    <a href="todo">{item.name}</a>
                </p>
            </div>
            <div className='cover-author'>

            </div>
        </CoverWrapper>
    )
})

export default YKSongsCover
