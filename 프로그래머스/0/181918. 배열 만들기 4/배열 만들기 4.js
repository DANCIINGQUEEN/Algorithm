function solution(a) {
    let stk=[]
    let i=0
    while(i<a.length){
        if(!stk.length) {
            stk.push(a[i])
            i++
        }
        if((stk.length)&&stk[stk.length-1]<a[i]) {
            stk.push(a[i])
            i++
            
        }
        if((stk.length)&&stk[stk.length-1]>=a[i]) stk.pop()
    }
    return stk
}