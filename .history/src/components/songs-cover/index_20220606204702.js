import React, { memo } from 'react'

import { CoverWrapper } from './style'
import { getCount } from '../../utils/data-format'
import {,playlistId}

const YKSongsCover = memo((props) => {
    const { item } = props

    return (
        <CoverWrapper key={item}>
            <div className="cover-top">
                <img className="link-cover" src={item.picUrl} alt={item.name}></img>
                <a className="recommend-link sprite_cover" href={playlistId(item.id)}>
                    {' '}
                </a>

                <div className="count-play sprite_cover">
                    <span className="count">
                        <i className="icon1 sprite_icon"></i>
                        <span className="count-text">{getCount(item.playCount)}</span>
                    </span>
                    <a className="icon2 sprite_icon" href="play">
                        {' '}
                    </a>
                </div>
            </div>
            <div className="cover-bottom">
                <a className="cover-name" href="todo">{item.name}</a>
            </div>
            <div className="cover-author text-nowrap">
                {/* by {item.copywriter || item.creator.nickname} */}
            </div>
        </CoverWrapper>
    )
})

export default YKSongsCover
