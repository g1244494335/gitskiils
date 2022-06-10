import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:75px;
    background-color: #242424;

    .content{
        height:70px;

        display:flex;
        justify-content:space-between;
    }

    .divider{
        height:5px;
        background-color: #C20C0C
    }
`

export const HeaderLeft = styled.div`
    display:flex;

    .logo{
        display:block;
        width:157px;
        height:100%;
        padding-right:20px;
        background-position:0 0;
    }

    .select-list{
        display:flex;
        line-height:70px;

        .select-item{
            position:relative;
            a{
                display:block;
                color: #ccc;
                height:100%;
                font-size:14px;
                padding:0 19px;
            }

            :last-of-type a {
                position: relative;
                ::after{
                    position: absolute;
                    content:"";
                    width: 28px;
                    height:19px;
                    background-image: url(${require("@/assets/img/sprite_01.png")});
                    background-position:-190px 0;
                    top:20px;
                    right:-15px;
                }
            }

            &:hover a,&.active a{
                color:
            }
        }
        
    }
`

export const HeaderRight = styled.div`

`