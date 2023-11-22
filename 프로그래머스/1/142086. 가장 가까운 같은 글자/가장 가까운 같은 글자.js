// function solution(s) {
//     let firstArr=[]
//     let nearArr=[]
//     s.split``.forEach((x, i)=>{
//         if(firstArr.includes(x))  nearArr.push(i-firstArr.lastIndexOf(x))
//         else nearArr.push(-1)
//         firstArr.push(x)
//     })
//     return nearArr
// }
function solution(s){
      const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}