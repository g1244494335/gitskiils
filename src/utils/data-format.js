export function getCount(count) {
    if (count < 10000) {
        return count
    } else {
        return ~~(Number(count)/10000)+'万'
    }
}

export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`
  }