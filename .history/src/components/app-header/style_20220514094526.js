import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:75px;
    background-color: #242424;

    .content{
        height:70px;

        display:flex;
        justify-content:space-between;
    }

    .divider{
        height:5px;
        background-color: #C20C0C
    }
`

export const HeaderLeft = styled.div`
    display:flex;

    .logo{
        display:block;
        width:157px;
        height:100%;
        padding-right:20px;
        background-position:0 0;
    }

    .select-list{
        display:flex;
        line-height:70px;

        .select-item{
            position:relative;
        }
        background-color: #000;
        color: #fff;
        height:100%;
        font-size:14px;
        padding:0 19px;
    }
`

export const HeaderRight = styled.div`

`