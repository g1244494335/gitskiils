import styled from "styled-components"

export const FootWrapper = styled.div`
    height:172px;
    background-color:#f2f2f2;
    border-top: 1px solid #d3d3d3;
    .content{
        display:flex;
        justify-content:space-between;
    }
`
export const FootLeft = styled.div`
    width:520px;
    padding-top:15px;
    line-height:24px;

    .item{
        color:#999;
    }

    .line{
        margin:0 2px 0 4px;
        color:#c2c2c2;
    }

    .logo{
        display:inline-block;
        height:14px;
        width:14px;
        background-position:0 0;
        background-size:cover;
    }
`

export const FootRight = styled.div`

`