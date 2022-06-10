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

    p{
        line-height:24px;
    }

    span{
        color:#666
    }

    .item{
        color:#999;
    }

    .line{
        margin:0 4px 0 6px;
        color:#c2c2c2;
    }

    .sep{
        margin-right:14px;
    }

    .police-link{
        margin-left:8px;
    }

    .logo{
        display:inline-block;
        height:14px;
        width:14px;
        background-position:0 0;
        background-size:cover;
        margin-right:2px;
    }
`

export const FootRight = styled.div`
    width:420px;
    margin-top:33px;
    display:flex;

    div{
        width:60px;
        height:70px;
        color:#666;
        text-align:center;
    }

    .logo-amped{
        background-position:-63px,-4
    }
`