import request from "./request"

export function getTopBanners() {
    return request({
        url:"/banner"
    })
}

export function getHotRecom() {
    return request({
        url:"/banner"
    })
}