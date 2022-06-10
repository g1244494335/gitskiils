import styled from "styled-components";

export const CoverWrapper = styled.div`
    .album{
        position: relative;
        width:${props => props.width};
        height:${props => props.size};
        /* overflow: hidden; */

        .img{
            width:${props => props.size};
            height:${props => props.size};
        }

        .cover{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-position: 0 ${props => props.bgp};
            text-indent:-9999px;
        }
    }

    .info{
        font-size: 12px;
        width:${props => props.size};
        .name{
            
        }

    }
`