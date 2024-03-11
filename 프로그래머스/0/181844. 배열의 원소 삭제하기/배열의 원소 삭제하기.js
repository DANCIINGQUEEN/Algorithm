function solution(arr, d) {
    return arr.filter(x=>!d.includes(x))
}