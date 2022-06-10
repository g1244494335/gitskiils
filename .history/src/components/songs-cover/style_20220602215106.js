import styled from 'styled-components'

export const CoverWrapper = styled.div`
    width: 140px;
    height: 204px;

    .cover-top {
        position:relative;
        width: 140px;
        height: 140px;

        .link-cover {
            width: 100%;
        }

        .recommend-link{
            position:absolute;
            width:100%;
            height: 100%;
            top:0;
            left:0;
            background-position:0 0
        }

        .count-play{
            position:absolute;
            display:flex;
            justify-content:space-between;
            width:100%;
            height:27px;
            background-position:0 -537px;
            bottom:0px;
            left:0;
            color:#ccc;

            .count{
                display:flex;

                .icon1{
                display:block;
                width:14px;
                height:11px;
                background-position:0 -24px;
                margin: 9px 5px 9px 10px;
                }

                .count-text{
                    margin-top:7px;
                }
            }

            .icon2{
                    display:block;
                    width:16px;
                    height:17px;
                    background-position:0 0;
                    margin: 9px 5px 5px 10px;
                }

            
        }
    }
`
