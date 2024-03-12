function solution(m) {
    let r=m.split(/[a|b|c]/g).filter(x=>x)
    return r.length?r:['EMPTY']
}