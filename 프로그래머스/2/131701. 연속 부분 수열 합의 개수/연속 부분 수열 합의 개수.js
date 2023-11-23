function solution(elements) {
   let a=[...elements, ...elements]
   let s=new Set()
   for(let i=0;i<elements.length;i++){
       for(let j=0;j+i<a.length;j++){
           s.add(a.slice(j, j+i).reduce((a,c)=>a+c,0))
       }
   }
    return s.size
}