function solution(want, number, discount) {
    let r=0
    discount.forEach((x,i)=>{
        let copy=[...discount].slice(i, i+10)
        if(copy.length<10) return r
        let f=0
        for(let j=0;j<want.length;j++){
            if([...copy].filter(e=>e==want[j]).length==number[j]) f++
            else break
        }
        if(f==want.length) r++
    })
    return r
}