function solution(m, o, s) {
    let mm=m.split``
    mm.splice(s,o.length,o)
    //splice(배열 시작점, 삭제 요소의 수, 배열에 추가할 요소, 추가할 요소....)
    return mm.join``
}