import styled from "styled-components";

export conheight:${props => props.size+"px"};st CoverWrapper = styled.div`


    .album-cover{
        position: relative;
        width:${props => props.width+"px"};
        height:${props => props.size+"px"};
        overflow: hidden;

        .img{
            width:${props => props.size+"px"};
            height:${props => props.size+"px"};
        }

        .cover{
            position: absolute;
            width:${props => props.width + "px"};
            height:${props => props.size+"px"};
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
        .name{
            color:#000;
        }
        .artist{
            color:#666;
        }

    }
`