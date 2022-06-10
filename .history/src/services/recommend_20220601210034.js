import request from "./request"

export function getTopBanners() {
    return request({
        url:"/banner"
    })
}

export function etgHotRecommend(limit) {
    return request({
        url: "/personalized"
        params: {
            limit
        }
    })
}