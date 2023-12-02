let N=+require('fs').readFileSync('dev/stdin')
let H=(n,a,b)=>{
  if(n===1)return `${a} ${b}`
  else return `${H(n-1,a,6-a-b)}\n${H(1,a,b)}\n${H(n-1,6-a-b,b)}`;
}
console.log((1<<N)-1);
console.log(H(N,1,3));