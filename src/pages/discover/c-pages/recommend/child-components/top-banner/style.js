import styled from "styled-components";

export const TopBannerWrapper = styled.div`
    background:url('${props => props.bgImage}') center/6000px;
    height:270px;
    background-color:#333;
`

export const TOPBanner = styled.div`
    display:flex;
    position:relative;
    height:100%;
    width: 984px;
    margin:0 auto;
`

export const TOPBannerLeft = styled.div`
    width:730px;

    .banner-item{
        display:block;

    }

    .banner-image{
        width:100%;
    }

    button{
        display: inline-block;
        width:3px;
        height:3px;
        border-radius:50%;
    }

`

export const TOPBannerRight = styled.div`
    width: 254px;
    height: 270px;
    background: url(${require("@/assets/img/download.png")});
    .download-cli{
        display:block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
    }

    p{
        width:254px;
        margin:4px 0;
        text-align:center;
        color:#8d8d8d;
    }
`

export const BannerControl = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:50%;
    transform:translateY(-50%);
    .btn {
        position:absolute;
        width:37px;
        height: 63px;
        background-image: url(${require("@/assets/img/banner_sprite.png")});
        background-color:transparent;
        cursor: pointer;

        &:nth-child(1){
            left:-68px;
            background-position:0 -360px;
            &:hover{
                background-position:0 -430px;
            }
        }
        &:nth-child(2) {
            right: -68px;
            background-position: 0 -508px;
            &:hover{
                background-position:0 -578px;
            }
    }
    }

`