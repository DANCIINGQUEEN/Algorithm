function solution(left, right) {
    let a=[]
    for(let i=left;i<=right;i++){
        let c=0
        for(let j=1;j<=i;j++){
            if(i%j===0) c++
        }
        a.push(c)
    }
    // console.log(a)
    let b=0
    let s=0
    for(let i=left;i<=right;i++){
        if(a[b]%2) s-=i
        else s+=i
        b++
    }
    return s
}