import React, { memo } from 'react'

import CoverWrapper fom

const YKSongsCover = memo((props) => {

    const { item } = props.item
    
    const playlistId = (id) => {
        return "https://music.163.com/#/playlist?id="+id
    }

    return (
        <div className="item" key={item}>
            <a className="recommend-link" href={playlistId(item.id)}>
                <img className="link-cover" src={item.picUrl} alt={item.name}></img>
            </a>
            <div></div>
            <p>
                <a href="todo">{item.name}</a>
            </p>
        </div>
    )
})

export default YKSongsCover
