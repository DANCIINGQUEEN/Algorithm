let i=+require('fs').readFileSync('dev/stdin').toString().trim()
let a=0
while(true){
    if(!(i%5)){
        console.log(i/5+a)
        break
    }
    if(i<0){
        console.log(-1)
        break
    }
    a++
    i-=3
}