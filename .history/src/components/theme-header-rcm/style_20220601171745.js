import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 689px;
    height: 33px;
    border-bottom:2px solid #c10d0c;
    display:flex;
    justify-content:space-between;
    font-size:12px;
    color:#666;

    .left{
        display:flex;

        h3{
        font-size:20px;
        color:#333;
        }

        .keywords{
            display:flex;
            margin: 7px 0 0 20px;

            .item{

            }

            .divider
        }

    }

    .right{
        margin-top:9px;
        .icon{
            display:inline-block;
            width: 12px;
            height: 12px;
            margin-left:4px;
            vertical-align: middle;
            background-position:0 -240px;
        }
    }
`
