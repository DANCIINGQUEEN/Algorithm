function solution(n) {
    // for(let i=0;i<n.length;i++){
    //     if(n[i]<0){
    //         return i
    //         break
    //     }
    // }
    // return -1
    return n.findIndex(x=>x<0)
}