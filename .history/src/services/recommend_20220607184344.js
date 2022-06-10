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

export function getNewAlbums() {
    return request({
        url: "/album/newest",
    })
}

export function get() {
    return request({
        url: "/album/newest",
    })
}