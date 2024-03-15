function solution(a) {
    let al=a.length
    let a0l=a[0].length
   if(al>a0l){
       let q=Array(al-a0l).fill(0)
       return a.map(x=>[...x,...q])
   }
    if(al<a0l){
       let q=Array(a0l).fill(0)
       for(let i=0;i<a0l-al;i++){
           a.push(q)
       }
   }
    return a
}