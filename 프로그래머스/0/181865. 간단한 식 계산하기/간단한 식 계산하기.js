function solution(b) {
    let [q,w,e]=b.split` `
    if(w==='+') return +q+ +e
    else if(w==='-') return +q- +e
    else return +q* +e
    }