function solution(m) {
    let s=m.split` `
    let a= +s[0]
        for(let i=0;i<s.length;i++){
            if(s[i]==='+') a+= +s[i+1]
            else if(s[i]==='-') a-= +s[i+1]
    }
    return a
}