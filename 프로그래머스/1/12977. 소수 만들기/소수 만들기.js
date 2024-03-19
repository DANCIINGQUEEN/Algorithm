// function solution(n) {
//     let r=[]
//     let p=a=>{
//         for(let i=2;i<=Math.sqrt(a);i++) {
//             if(!(a%i)) return false
//         }
//         return true
//     }
//     let s=n.length
//     for(let i=0;i<s;i++){
//         for(let j=i+1;j<s;j++){
//             for(let k=j+1;k<s;k++){
//                 let a=n[i]+n[j]+n[k]
//                 if(p(a)) r.push(a)
//             }
//         }
//     }
//     return r.length
// }
function solution(n) {
    let r = [];
    let p = a => {
        if (a % 2 === 0) return a === 2; // 2는 소수, 그 외의 짝수는 소수가 아님
        let sqrtA = Math.sqrt(a);
        for (let i = 3; i <= sqrtA; i += 2) {
            if (a % i === 0) return false;
        }
        return a > 1;
    };
    let s = n.length;
    for (let i = 0; i < s - 2; i++) {
        for (let j = i + 1; j < s - 1; j++) {
            for (let k = j + 1; k < s; k++) {
                let a = n[i] + n[j] + n[k];
                if (p(a)) r.push(a);
            }
        }
    }
    return r.length;
}
