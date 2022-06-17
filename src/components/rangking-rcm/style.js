import styled from "styled-components";

export const RankingWrapper = styled.div`
    width: 230px;

    .header{
        box-sizing: border-box;
        height: 120px;
        padding:20px 0 0 19px;
        display:flex;
        /* justify-content:space-between; */
        .cover{
            position: relative;
            .img-cover{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 80px;
                background-position:-145px -57px;
            }
        }
        .title{
            width: 116px;
            height: 80px;
            margin: 6px 0 0 10px;
            h3{
                font-weight:bold;
            }
            .btn{
                display:flex;
                justify-content:space-between;
                width:54px;
                margin-top:5px;
                a{
                    display: inline-block;
                    width:22px;
                    height: 22px;
                }
                .play-btn{
                    background-position:-267px -205px;
                    &:hover{
                        background-position:-267px -235px;
                    }
                }
                .save-btn{
                    background-position:-300px -205px;
                    &:hover{
                        background-position:-300px -235px;
                    }
                }
            }
        }
    }

    .list{
        margin-left:12px;
        li:nth-child(-n+3){
            color:#c10d0c
        }

        .list-songs{
            height: 32px;
            vertical-align: middle;
            line-height:30px;

            .number{
                display: inline-block;
                height:100%;
                width:35px;
                font-size:16px;
                text-align:center;
            }
            .song-link{
                display: inline-block;
                height:100%;
                width: 170px;
                color: black;
                vertical-align: middle;
            }
            .operate{
                width: 81px;
                height:20px;
                margin-top: 6px;
                float:right;
                display:none;
                .btn{
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    margin-right:10px;
                }
                .play{
                    background-position: -267px -268px;
                    &:hover{
                        background-position:-267px -288px;
                    }
                }
                .addto{
                    background-position: 0px -698px;
                    &:hover{
                        background-position:-22px -698px;
                    }
                }
                .favor{
                    background-position: -297px -268px;
                    &:hover{
                        background-position:-297px -288px;
                    }
                }
            }
            &:hover{
            .song-link{
                width: 96px;
            }
            .operate{
                display:block;
            }
        }
        }
    }

    .footer{
        text-align: right;
        height: 32px;
        line-height:32px;
        margin-right:32px;
        .more{
            color:#000;
        }
    }
`