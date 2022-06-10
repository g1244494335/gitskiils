import styled from 'styled-components'

export const CoverWrapper = styled.div`
    width: 140px;
    height: 204px;

    .cover-top {
        position:relative;
        width: 140px;
        height: 140px;

        .recommend-link{
            position:absolute;
            width:100%;
            height: 100%;
            top:0
            background-position:0 0
        }

        .link-cover {
            width: 100%;
        }
    }
`
