// function solution(n, left, right) {
//     return new Array(n).fill(new Array(n).fill(1)).map((x,i)=>x.map((y,j)=>y=((i>=j)?i:j)+1)).flat().slice(left, right+1)
// }
function solution(n, left, right) {
    return [true].reduce((result, _) => {
        for (let idx = left; idx <= right; idx++) {
            result.push(Math.max(idx % n, Math.floor(idx / n)) + 1);
        }
        return result;
    }, []);
}
