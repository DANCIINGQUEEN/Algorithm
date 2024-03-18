// function solution(b) {
//     let p=["aya", "ye", "woo", "ma"]
//     let a=0
//     for(let i in b){
//         let s=b[i]
//         for(let j in p){
//             if(b[i].includes(p[j])) s=s.replace(p[j],'X')
//         }
//         s=s.replace(/O/gi,'')
//         if(s.length===0) a++
//     }
//     return a
// }
function solution(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let init = babbling[i];

    for (let j in can) {
      if (babbling[i].includes(can[j])) {
        init = init.replace(can[j], "X");  // 할 수 있는 단어는 X로 치환
      }
    }

    init = init.replace(/X/gi, "");  // X를 모두 공백으로 치환하고 나서
    if (init.length === 0) {  // 공백이 되면 answer에 추가
      answer += 1;
    }
  }
  return answer;
}