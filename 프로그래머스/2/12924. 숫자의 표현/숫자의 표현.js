// function solution(n) {
//     let c=0
//     for(let i=1;i<=n;i++){
//         let s=0
//         for(j=i;j<=n;j++){
//             s+=j
//             if(s===n) {
//                 // console.log(j,s)
//                 c++
//                 continue
                
//             }
//         }
//     }
//     return c;
// }
function solution(n) {
    var answer = 0;
    for (let i  =0; i <=n; i++) {
        if ( n % i === 0 && i % 2 === 1 )   //약수이면서 홀수인 경우 
            answer ++
    }
    return answer;
}