import styled from "styled-components";

export const NewAlbumWrapper = styled.div`

    .content{
        height: 186px;
        background-color:#f5f5f5;
        border: 1px solid #fff;
        
        /* position: relative; */
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .album{
        display:flex;
        justify-content:space-be
        width: 645px;
        height: 180px;
        margin-top:28px;
    }

    .arrow{
        width: 17px;
        height: 17px;
        cursor:pointer
    }

    .arrow-left{
        background-position:-260px -75px;
        /* position:absolute;
        top:71px;
        left:4px; */

        &:hover{
            background-position:-280px -75px;
        }
    }

    .arrow-right{
        background-position:-300px -75px;
        /* position:absolute;
        top:71px;
        right:4px; */

        &:hover{
            background-position:-320px -75px;
        }
    }
`