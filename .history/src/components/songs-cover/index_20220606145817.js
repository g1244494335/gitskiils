import React, { memo } from 'react'

import { CoverWrapper } from './style'

const YKSongsCover = memo((props) => {
    const { item } = props

    const playlistId = (id) => {
        return 'https://music.163.com/#/playlist?id=' + id
    }

    const playCount = (count) => {
        if (Number(count) < 10000) {
            return count
        } else {
            return String(~~(Number(count)/10000))+'万'
        }
    }

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
                        <span className="count-text">{playCount(item.playCount)}</span>
                    </span>
                    <a className="icon2 sprite_icon" href="play">
                        {' '}
                    </a>
                </div>
            </div>
            <div className="cover-bottom">
                <a className="cover-name" href="todo">{item.name}</a>
            </div>
            <div className="cover-author">
                by {item.copywriter || item.creator.nic}
            </div>
        </CoverWrapper>
    )
})

export default YKSongsCover
