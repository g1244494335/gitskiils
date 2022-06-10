import styled from "styled-components";

export const TopBannerWrapper = styled.div`
    height:270px;
    background-color:#333;
    display:flex;
`

export const TOPBanner = styled.div`
    display:flex;
    
`

export const TOPBannerLeft = styled.div`
    width:730px;

    .banner-item{
        .banner-image{
            width:100%;
        }
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
    .download-cli{
        height: 270px;
    }
    .download-cli-image{
    background: url(${require("@/assets/img/download.p")}) no-repeat 0 0px;
}
    
`