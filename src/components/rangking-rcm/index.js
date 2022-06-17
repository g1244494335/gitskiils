import React, { memo } from 'react'

import { songId,toplistId } from '../../utils/getUrl'

import { getSizeImage } from '../../utils/data-format'
import { RankingWrapper } from './style'

const YKRankingRCM = memo((props) => {

    const { item, list } = props;

    return (
        <RankingWrapper>
            <div className="header">
                <div className="cover">
                    <img src={getSizeImage(item?.coverImgUrl,80)} alt={item?.description}/>
                    <a href={toplistId(item?.id)} className='img-cover sprite_cover'> </a>
                </div>
                <div className="title">
                    <a href={toplistId(item?.id)} className="rank-title">
                        <h3>{item?.name}</h3>
                    </a>
                    <div className="btn">
                        <a href={item?.id} className="play-btn sprite_02"> </a>
                        <a href={item?.id} className="save-btn sprite_02"> </a>
                    </div>
                </div>
                
            </div>
            <div className="list">
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={item.id} className="list-songs">
                                <span className="number">{ index+1}</span>
                                <a href={songId(item?.id)} className="song-link text-nowrap">{item.name}</a>
                                <div className="operate">
                                    <button className="btn sprite_02 play"></button>
                                    <button className="btn sprite_icon2 addto"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="footer">
                <a href={toplistId(item?.id)} className="more">查看全部&gt;</a>
            </div>
        </RankingWrapper>
    )
    })

export default YKRankingRCM
