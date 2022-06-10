import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'
import { RankingWrapper } from './style'

const YKRankingRCM = memo((props) => {

    const {item} = props


    return (
        <RankingWrapper>
            <div className="header">
                <div className="img">
                    <img src={getSizeImage(item.coverImgUrl,80)} alt={item.description}></img>
                    <a href={item.id} className='img-cover'> </a>
                </div>
            </div>
            <div className="list"></div>
            <div className="footer"></div>

        </RankingWrapper>
    )
})

export default YKRankingRCM
