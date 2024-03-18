function solution(n) {
    let a=Array.from(Array(n),()=>Array(n).fill(0))
    let m=1
    let r=0
    let c=0
    for(let i=n;i>0;i-=2){
        // right
        for(let j=0;j<i;j++){
            a[r][c]=m++
            c++
        }
        c--
        r++
        //down
        for(let j=0;j<i-1;j++){
            a[r][c]=m++
            r++
        }
        r--
        c--
        //left
        for(let j=0;j<i-1;j++){
            a[r][c]=m++
            c--
        }
        c++
        r--
        //up
        for(let j=0;j<i-2;j++){
            a[r][c]=m++
            r--
        }
        r++
        c++
    }
    return a
}