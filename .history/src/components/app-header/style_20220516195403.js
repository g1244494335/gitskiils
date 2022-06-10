import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:75px;
    background-color: #242424;
    font-size:14px;

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

            :hover a,a.active{
                color:white;
                background-color:black;
                text-decoration:none;
            }

            .active .icon{
                position:absolute;
                display:inline-block;
                width:12px;
                height:7px;
                background-position:-226px 0;
                bottom:-1px;
                left:50%;
                transform:translate(-50%,0)
            }
        }
        
    }
`

export const HeaderRight = styled.div`
    display:flex;
    align-items:center;
    color:#ccc;
    font-size:12px;

    .search{
        width:158px;
        height:32px;
        /* margin-top:19px; */
        border-radius:32px;

        input{
            ::placeholder{
                font-size:12px;
                color:#9B9B9B
            }
        }
    }

    .center{
        wi
    }
`