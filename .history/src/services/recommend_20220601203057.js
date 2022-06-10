import request from "./request"

export function getTopBanners() {
    return request({
        url:"/banner"
    })
}

export function getHot() {
    return request({
        url:"/banner"
    })
}