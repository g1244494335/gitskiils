import request from "./request"

export function getTopBanners() {
    return request({
        url:"/banner"
    })
}

export function getHotRecommend() {
    return request({
        url: "/personalized?limit=8",
    })
}

export function getNewAlbum() {
    return request({
        url: "/TOP?limit=8",
    })
}