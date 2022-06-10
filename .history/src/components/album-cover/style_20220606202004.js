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
            
        }
    }
`