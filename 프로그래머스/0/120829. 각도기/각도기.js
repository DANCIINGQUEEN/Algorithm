// function solution(angle) {
//     return angle===90?
//         2
//     :
//     (
//         angle<90?1
//         :
//         (
//             angle===180?4:3
//         )
//     )
// }
const solution=angle=>[0,90,91,180].filter(x=>angle>=x).length