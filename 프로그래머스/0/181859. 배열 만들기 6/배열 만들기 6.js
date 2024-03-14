function solution(a) {
    let stk=[]
    for(let i=0;i<a.length;i++){
        if(stk[stk.length-1]===a[i]) stk.pop()
        else stk.push(a[i])
    }
    return stk.length?stk:[-1]
}