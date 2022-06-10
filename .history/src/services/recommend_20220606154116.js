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

export function getNewAl() {
    return request({
        url: "/personalized?limit=8",
    })
}