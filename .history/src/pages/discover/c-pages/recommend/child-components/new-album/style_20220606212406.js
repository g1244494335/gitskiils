import styled from "styled-components";

export const NewAlbumWrapper = styled.div`

    .content{
        height: 186px;
        background-color:#f5f5f5;
        border: 1px solid #d3d3d3;
        margin-bottom:37px;
        
        /* position: relative; */
        display:flex;
        justify-content:center;
        /* align-items:center; */
    }

    .album{
        width: 645px;
        height: 180px;
        /* margin-top:28px; */
    }

    .page{
        display:flex !important;
        justify-content:space-between;

        .new-album{
            width: 118px;
            height: 150px;
            margin-left:11px;
        }
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