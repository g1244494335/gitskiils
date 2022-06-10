import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:75px;
    background-color: #242424;

    .content{
        height:70px;
        background-color: #bfa;

        display:flex;
        justify-content:space-between;
    }

    .divider{
        height:5px;
        background-color: #C20C0C
    }
`

export const HeaderLeft = styled.div`
    .logo{
        background: url(../../assets/img/sprite_01.png) no-repeat 0 9999px;
        display:block;
        width:157px;
        height:100%;
        padding-right:20px;
    }
`

export const HeaderRight = styled.div`

`