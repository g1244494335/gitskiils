import React, { memo } from 'react'

import { Slider} from 'antd';

import {
    PlayerBarWrapper,
    Control,
    Player,
    Operate
} from './style'

const YKPlayerBar = memo(() => {
    return (
        <PlayerBarWrapper>
            <div className='content w980'>
                <Control>
                    <button className='prev sprite'></button>
                    <button className='play sprite'></button>
                    <button className='next sprite'></button>
                </Control>
                <Player>
                    <div className='image'>
                        <a href='/#'>
                            <img src='https://p1.music.126.net/TgLgG6MprHJuzNIs_VFJkQ==/109951167531706578.jpg?param=34y34' alt=''></img>
                        </a>
                    </div>
                    <div className='info'>
                        <div className='name'>
                            <a href='/#'>形容词</a>
                            <a href='/#'>艾热AIR</a>
                            <span className='icon'></span>
                        </div>
                        <div className='slider'>
                            <Slider></Slider>
                            <span>
                                <em>00:36</em>&nbsp;/ 00:00
                            </span>
                        </div>
                    </div>
                </Player>
                <Operate>
                    <button className='lyric sprite'></button>
                    <button className='collection sprite'></button>
                    <button className='share sprite'></button>
                    <button className='volume sprite'></button>
                    <button className='mode sprite'></button>
                    <button className='playlist sprite'></button>
                </Operate>
            </div>
        </PlayerBarWrapper>
    )
})

export default YKPlayerBar
