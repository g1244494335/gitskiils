export function getCount(count) {
    if (count < 10000) {
        return count
    } else {
        return ~~(Number(count)/10000)+'万'
    }
}