import styled from 'styled-components'

import pic from '@/assets/img/playbar_sprite.png'

export const PlayerBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    background-image: url(${pic});
`
export const Control = styled.div`
    display:flex;
`

export const Player = styled.div`
    width: 200px;
    display:flex;
    .info{
        .slider{
            display:flex;
            span{
                color:#fff
            }
        }
    }
    
`

export const Operate = styled.div`
    display:flex;

`

