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

export function getTopList() {
    return request({
        url: "/toplist",
    })
}

export function getTopList(id) {
    return request({
        url: "/playlist/track/all?id=",
    })
}