let a=require('fs').readFileSync('dev/stdin').toString().trim().split`\n`.map(e=>+e)
let n=a.shift()
for(let i=0;i<n;i++){
    let k=a.shift()
    let n=a.shift()
    let l=[]
    for(let i=0;i<=k;i++){
        l.push([1])
        for(let j=1;j<n;j++){
            l[i].push(i?l[i][j-1]+l[i-1][j]:j+1)
        }
    }
    console.log(l[k][n-1])
}