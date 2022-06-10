import React, { memo } from 'react'

import CoverWrapper from './style'

const YKSongsCover = memo((props) => {
    const { item } = props.item

    const playlistId = (id) => {
        return 'https://music.163.com/#/playlist?id=' + id
    }

    return (
        <CoverWrapper key={item}>
            <div className='cover-top'>
                <a className="recommend-link" href={playlistId(item.id)}>
                    <img className="link-cover" src={item.picUrl} alt={item.name}></img>
                </a>
            </div>
            <divclassName='cover-top'>
                <p>
                    <a href="todo">{item.name}</a>
                </p>
            </divclassName=>
            <div></div>
        </CoverWrapper>
    )
})

export default YKSongsCover
