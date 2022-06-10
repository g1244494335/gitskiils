import styled from "styled-components";

export const NewAlbumWrapper = styled.div`

    .content{
        height: 184px;
        background-color:#f5f5f5;
        border: 1px solid #fff;
        
        position: relative;
    }

    .arrow{
        width: 17px;
        height: 17px;
        cursor:pointer
    }

    .arrow-left{
        background-position:-260px -75px;

        &:hover{
            background-position:-280px -75px;
        }
    }

    .arrow-right{
        background-position:-300px -75px;

        &:hover{
            background-position:-320px -75px;
        }
    }
`